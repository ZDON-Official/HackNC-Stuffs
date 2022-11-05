from django.db import models

# Create your models here.
# create cards
from django.db import models 

NUM_BOXES = 2 #for the "upcoming" box and "past" box

BOXES = range(1,NUM_BOXES+1)

class Reminder(models.Model):
    stuff = models.CharField(max_length=100)
    ddl = models.CharField(max_length=100)
    box = models.IntegerField(
        choices = zip(BOXES,BOXES),
        default=BOXES[0],
    )
    
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.stuff #add the deadline, AND make it a list
