# urls.py
from django.urls import path
from .views import (
    DoctorListCreateAPIView,
    DoctorRetrieveUpdateDestroyAPIView,
    DoctorCreateAPIView,
    PacienteListCreateAPIView,
    PacienteRetrieveUpdateDestroyAPIView,
    PacienteCreateAPIView,
    CitaListCreateAPIView,
    CitaRetrieveUpdateDestroyAPIView,
    CitaCreateAPIView
)


urlpatterns = [
    path('api/doctors/', DoctorListCreateAPIView.as_view(), name='doctor-list-create'),
    path('api/doctors/<int:pk>/', DoctorRetrieveUpdateDestroyAPIView.as_view(), name='doctor-retrieve-update-destroy'),
    path('api/doctors/create/', DoctorCreateAPIView.as_view(), name='doctor-create'),
    path('api/pacientes/', PacienteListCreateAPIView.as_view(), name='paciente-list-create'),
    path('api/pacientes/<int:pk>/', PacienteRetrieveUpdateDestroyAPIView.as_view(), name='paciente-retrieve-update-destroy'),
    path('api/pacientes/create/', PacienteCreateAPIView.as_view(), name='paciente-create'),
    path('api/citas/', CitaListCreateAPIView.as_view(), name='cita-list-create'),
    path('api/citas/<int:pk>/', CitaRetrieveUpdateDestroyAPIView.as_view(), name='cita-retrieve-update-destroy'),
    path('api/citas/create/', CitaCreateAPIView.as_view(), name='cita-create'),
]