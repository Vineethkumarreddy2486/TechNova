import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
competitions = [
  {
    title: 'AI Innovation Challenge',
    description: 'Develop AI solutions that address real-world problems in healthcare, education, or sustainability.',
    image: '/images/AI-Innovation-Challenge.jpg',
    badge: 'Deadline Soon',
    badgeColor: 'bg-danger text-white',
    endDate: 'May 30, 2025',
    teams: 48,
  },
  {
    title: 'Web Development Hackathon',
    description: 'Create innovative web applications that solve problems for local businesses or communities.',
    image: '/images/hackathon.jpg',
    badge: '',
    badgeColor: '',
    endDate: 'June 15, 2025',
    teams: 35,
  },
  {
    title: 'IoT Solutions Competition',
    description: 'Build Internet of Things solutions that improve efficiency, safety, or quality of life.',
    image: '/images/iot.jpg',
    badge: 'New',
    badgeColor: 'bg-warning text-dark',
    endDate: 'July 10, 2025',
    teams: 22,
  }
];


steps = [
  {
    icon: 'bi bi-person-plus-fill',
    title: 'Register',
    description: 'Create an account and complete your profile with your college information.'
  },
  {
    icon: 'bi bi-trophy',
    title: 'Join Competition',
    description: 'Browse available competitions and register for those that match your interests.'
  },
  {
    icon: 'bi bi-cloud-upload',
    title: 'Submit Project',
    description: 'Work on your project and submit it before the deadline with all required materials.'
  },
  {
    icon: 'bi bi-award',
    title: 'Win Prizes',
    description: 'Get your projects evaluated by experts and win recognition and exciting prizes.'
  }
];


}
