from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse



def home_view(request):
    return render(request, 'blogs/home.html', context=None)


def blog_list_view(request):
    blog_list = [
        {'id': 1, 'title': 'blog title 1', 'content': 'blog content'},
        {'id': 2, 'title': 'blog title 2', 'content': 'blog content'},
        {'id': 3, 'title': 'blog title 3', 'content': 'blog content'},
        {'id': 4, 'title': 'blog title 4', 'content': 'blog content'},
        {'id': 5, 'title': 'blog title 5', 'content': 'blog content'},
    ]
    data = {
        'blog_list': blog_list
    }
    return JsonResponse(data)


def new_blog_view(request):
    print(request.is_ajax())
    title = request.POST.get('title')
    content = request.POST.get('content')
    if title and content:
        return JsonResponse(data={'title':title, 'content': content})
    print("redirecting")
    return redirect('blogs:home')
    