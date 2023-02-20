from django.urls import path 
from blogs.views import (
    home_view
)


app_name = "blogs"


urlpatterns = [
    path('', home_view, name='home')
]