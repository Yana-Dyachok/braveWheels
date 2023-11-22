from django.urls import path
from . import views

from rest_framework import routers
from .views import BicycleAPI
from django.urls import include

router = routers.DefaultRouter()
router.register(r'bicycle', BicycleAPI)

urlpatterns = [
    # all URL's
    # path("", views.index),
    path("", include(router.urls)),
]