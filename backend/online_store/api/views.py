from rest_framework import viewsets

from django.shortcuts import render
from django.http import HttpResponse

from .models import Bicycle
from .serealizer import BicycleSerializer


def index(request):
    bicycles = Bicycle.objects.all()
    return HttpResponse(bicycles)

####### API
class BicycleAPI(viewsets.ModelViewSet):
    queryset = Bicycle.objects.all()
    serializer_class = BicycleSerializer