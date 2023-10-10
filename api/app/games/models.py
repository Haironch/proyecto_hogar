from app.db import db

class Games(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)

    score = db.relationship('Scores', backref='games', lazy=True)

    def __repr__(self):
        return f'<{self.name} >'


    def save(self):
        db.session.add(self)
        db.session.commit()

    # @staticmethod
    # def get_by_id(childId):
    #     return Child.query.filter_by(id=childId).first()