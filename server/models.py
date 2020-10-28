from .extensions import db

class SampleModel(db.Model):
    __tablename__='sample_table'

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    col=db.Column(db.String)

    def as_dict(self):
        return{
            'id':self.id,
            'col':self.col
        }