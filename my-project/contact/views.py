# from django.shortcuts import render, redirect
# from django.contrib import messages
# from.forms import ContactForm


# def contact_view(request):
#     if request.method == 'POST':
#         form=ContactForm(request.POST)
#         if form.is_valid():
#             form.save()
#             messages.success(request,"Thanks-Your message has been Received")
#             return redirect('contact')
        
#         else:
#             form=ContactForm()
#             return render (request, 'contact/contact.html',{'form':form})

from django.shortcuts import render, redirect
from .forms import ContactForm
from django.contrib import messages

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your message has been sent successfully!")
            return redirect('contact')
        else:
            messages.error(request, "Please correct the errors below.")
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})
