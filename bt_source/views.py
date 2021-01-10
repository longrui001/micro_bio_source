
# ViewSets define the view behavior.
from rest_framework import viewsets

from bt_source.models import Student
from bt_source.serializers import StudentSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer