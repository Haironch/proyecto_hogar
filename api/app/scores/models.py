from app.db import db
from werkzeug.security import generate_password_hash, check_password_hash

class Scores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String(16), nullable=False)
    id_game = db.Column(db.Integer, db.ForeignKey('games.id'), nullable=False)
    id_child = db.Column(db.Integer, db.ForeignKey('child.id'), nullable=False)

    

    def __repr__(self):
        return f'<{self.id} >'


    def save(self):
        db.session.add(self)
        db.session.commit()
    
    @staticmethod
    def get_by_id_child(childId):
        return Scores.query.filter_by(id_child=childId).all()