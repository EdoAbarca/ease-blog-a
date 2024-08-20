from django.urls import path, include
from .views import *

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('admin/', AdminOnlyView.as_view(), name='admin'),
    path('editor/', EditorOnlyView.as_view(), name='editor'),
    path('reader/', ReaderOnlyView.as_view(), name='reader'),
]
