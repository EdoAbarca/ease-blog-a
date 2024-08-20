from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone

class Role(models.Model):
    id = models.AutoField(primary_key=True)
    rolename = models.CharField(max_length=50)

    def __str__(self):
        return self.rolename

class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    author = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    created = models.DateTimeField(default=timezone.now)
    visits = models.IntegerField(default=0)

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.TextField()
    article = models.ForeignKey('Article', on_delete=models.CASCADE)
    author = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    created = models.DateTimeField(default=timezone.now)


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    articles = models.ManyToManyField(Article)

    def __str__(self):
        return self.name



class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, role=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, role=role, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, role=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, email, password, role, **extra_fields)

class CustomUser(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Password field
    created = models.DateTimeField(default=timezone.now)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.username
