from app.db import db
from werkzeug.security import generate_password_hash, check_password_hash

class AdminsUsers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(16), nullable=False)
    lastname = db.Column(db.String(16), nullable=False)
    password = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f'<{self.name} {self.lastname} >'
    
    def set_password(self, password):
        self.password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password, password)


    def save(self):
        db.session.add(self)
        db.session.commit()
    
    @staticmethod
    def get_by_name(name):
        return AdminsUsers.query.filter_by(name=name).one_or_none()