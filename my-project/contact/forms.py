from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):   # <-- IMPORTANT: inherit from forms.ModelForm
    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message']
