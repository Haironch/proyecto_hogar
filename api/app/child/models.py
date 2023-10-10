from app.db import db
from werkzeug.security import generate_password_hash, check_password_hash

class Child(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(16), nullable=False)
    lastname = db.Column(db.String(16), nullable=False)
    age = db.Column(db.String(2), nullable=False)
    disabilityGrade = db.Column(db.Text, nullable=False)

    score = db.relationship('Scores', backref='child', lazy=True, cascade="all, delete")

    def __repr__(self):
        return f'<{self.name} {self.lastname} >'


    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all():
        return Child.query.all()
    
    @staticmethod
    def get_by_id(childId):
        return Child.query.filter_by(id=childId).first()