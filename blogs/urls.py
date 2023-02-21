from django.urls import path 
from blogs.views import (
    home_view,
    blog_list_view,
    new_blog_view
)


app_name = "blogs"


urlpatterns = [
    path('', home_view, name='home'),
    path('blogs', blog_list_view, name='all-blogs'),
    path('new/blog', new_blog_view, name='new-blog')
]