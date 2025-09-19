from django.db import models

# Create your models here.


class contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    subject = models.CharField(max_length=50)
    message = models.CharField(max_length=500)

def __str__(self):
    return self.name