from django.shortcuts import render

def home(request):
    return render(request, "index.html")

def aboutus(request):
    return render(request, "aboutus.html")  

def services(request):
    return render(request, "services.html")

def collections(request):
    return render(request, "collections.html")

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        subject = request.POST.get('subject','')
        message = request.POST.get('message','')
    return render(request, "contact.html")

 

def spring(request):
    return render(request, 'spring_collections.html')  # correct spelling


def summer(request):
    return render(request, 'summer_collections.html')

def fall(request):
    return render(request, 'fall.html')

def winter(request):
    return render(request, 'winter.html')

def party(request):
    return render(request, 'party.html')


def collection_nav(request):
    return render(request, 'collection_nav.html')
