from django.db import models

# Create your models here.

class Student(models.Model):
    s_name = models.CharField(max_length=10)

    class Meta:
        db_table = 'app_student'