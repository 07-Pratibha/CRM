import email
import uuid
from unicodedata import name
from flask import Flask, jsonify, render_template, request, flash
import json
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
import re

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:MySql#123@localhost:3306/crmdatabase'
app.config['SECRET_KEY'] = 'thisisasecretkey'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db=SQLAlchemy(app)
migrate = Migrate(app, db) #flask db init -> flask db migrate -> flask db upgrade
bcrypt=Bcrypt(app)

class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(15),unique=False,nullable=False)
    username = db.Column(db.String(15), unique=True,nullable=False)
    email = db.Column(db.String(50), unique=True,nullable=False)
    password = db.Column(db.String(80),nullable=False)
    date_created = db.Column(db.DateTime,default=datetime.utcnow)
    # date_updated = db.Column(), manually update
    def todict(self):
        return {"id": self.id, "username": self.username, "email": self.email, "password": self.password,"fullname": self.fullname}

@app.route('/register', methods=['POST'])
def register():
    if request.method=='POST':
        
        password = request.json.get("password")
        email = request.json.get("email")
        username = request.json.get("username")
        fullname = request.json.get("fullname")
        encrypted_password=bcrypt.generate_password_hash(password).decode('utf-8')
        regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
        # re.fullmatch(regex, email)

        if(len(username) < 5 or len(username) > 10):
            return {"msg": "Length of username should be between 5 to 10", "status" : 403}
        if(len(password) < 5 or len(password) > 10):
            return {"msg": "Password should be between 5 to 10", "status" : 403}
        if(len(fullname) < 5 or len(fullname) > 20):
            return {"msg": "Fullname should be between 5 to 10", "status" : 403} 
        if(not re.fullmatch(regex,email)):
            return {"msg": "Email is invalid!", "status" : 403}
        
        # username = request.form['username']
        # email = request.form['email']
        # password = request.form['password']
        # fullname = request.form['fullname']
        try:
            user = User(username=username, email=email, password=encrypted_password, fullname=fullname)
            db.session.add(user)
            db.session.commit()
            return 'User Registered Successfully!' #work on return jsonifyuser todict
        except:
            return {"msg":"Username and email should be unique", "status" : 403}


#return {"msg": "Created Successfully"}, 201
@app.route('/userinfo', methods=['GET'])
def userinfo():
    if request.method=='GET':
       response = []
       allUsers = User.query.limit(10).all()
       print (allUsers,5)
    #    allUsers = User.query.all()
       for i in allUsers:
         response.append(i.todict())
       print(response)
       return {"users" : response, "status" : 200 } 
       
 
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method=='POST':
        password = request.json.get("password")
        email = request.json.get("email")
        # password = request.form['password']       #request.json.get(key)
        # email = request.form['email']
        #checking if the password entered by user and the one in the database are same or not
        user = User.query.filter_by(email=email).first()
        if user:
            if bcrypt.check_password_hash(user.password,password):
                return 'Successfully logged in !' 
            else:
                return 'Incorrect credentials! Please try again'    
        else:
            return 'No such user found!'        
    return 'Invalid credentials !' 

if __name__=="__main__":
    # db.drop_all()
    db.create_all()
    app.run(debug=True)

 