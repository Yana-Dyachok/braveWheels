from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Meta:
        swappable = 'AUTH_USER_MODEL'

# add logic for product variation
class Bicycle(models.Model):
    title = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    description = models.CharField(max_length=400)
    promotion = models.BooleanField()
    #created_by
    #is_active
    photo = models.ImageField(upload_to='media', null=True, blank=True)

    def __str__(self) -> str:
        return self.title
    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    create_at =models.DateTimeField(auto_now_add=True)

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self)->str:
        return self.name