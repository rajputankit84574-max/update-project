
from django.contrib import admin
from django.urls import path
from django.shortcuts import redirect
from wscubetech import views

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('aboutus/', views.aboutus, name="aboutus"),
    path('services/', views.services, name="services"),
    path('collections/', views.collections, name="collections"),
    path('contact/', views.contact, name="contact"),

    path('collection_nav/', views.collection_nav, name="collection_nav"),
    path('spring/', views.spring, name='spring'),
    path('summer/', views.summer, name='summer'),
    path('fall/', views.fall, name='fall'),
    path('winter/', views.winter, name='winter'),
    path('party/', views.party, name='party'),

]

