// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Video/Image -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-r from-cinema-dark/90 via-cinema-primary/80 to-cinema-dark/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1489599032373-a4c25d5e6d48?w=1920&h=1080&fit=crop" 
            alt="Cinema Background" 
            class="w-full h-full object-cover animate-slow-zoom">
        </div>
        
        <!-- Floating Elements -->
        <div class="absolute inset-0 z-5">
          <div class="floating-element absolute top-20 left-10 w-4 h-4 bg-cinema-accent rounded-full opacity-70"></div>
          <div class="floating-element absolute top-40 right-20 w-6 h-6 bg-cinema-gold rounded-full opacity-50 animation-delay-1000"></div>
          <div class="floating-element absolute bottom-40 left-20 w-3 h-3 bg-cinema-accent rounded-full opacity-60 animation-delay-2000"></div>
          <div class="floating-element absolute bottom-20 right-40 w-5 h-5 bg-cinema-gold rounded-full opacity-40 animation-delay-3000"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div class="hero-content">
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-tight">
              <span class="block text-gradient animate-slide-up">Cinema</span>
              <span class="block text-white animate-slide-up animation-delay-500">Experience</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-cinema-light/80 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-1000">
              Immerse yourself in the magic of movies with premium sound, stunning visuals, and unparalleled comfort
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-1500">
              <button 
                (click)="navigateToMovies()"
                class="btn-primary text-lg px-8 py-4 transform hover:scale-110 hover:shadow-2xl hover:shadow-cinema-accent/30">
                <span class="flex items-center space-x-2">
                  <span>🎬</span>
                  <span>Browse Movies</span>
                </span>
              </button>
              
              <button 
                (click)="navigateToShowtimes()"
                class="btn-secondary text-lg px-8 py-4 transform hover:scale-110">
                <span class="flex items-center space-x-2">
                  <span>🎭</span>
                  <span>View Showtimes</span>
                </span>
              </button>
            </div>
          </div>
          
          <!-- Scroll Indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-cinema-accent rounded-full flex justify-center">
              <div class="w-1 h-3 bg-cinema-accent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Featured Movies Section -->
      <section class="py-20 bg-gradient-to-b from-cinema-dark to-cinema-primary">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-on-scroll">Featured Movies</h2>
            <p class="text-cinema-light/70 text-lg max-w-2xl mx-auto">Discover the latest blockbusters and critically acclaimed films</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              *ngFor="let movie of featuredMovies; let i = index" 
              class="movie-card group cursor-pointer"
              [style.animation-delay]="(i * 200) + 'ms'"
              (click)="selectMovie(movie)">
              
              <div class="relative overflow-hidden rounded-2xl bg-gradient-card shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div class="relative overflow-hidden">
                  <img 
                    [src]="movie.poster_url || 'https://images.unsplash.com/photo-1489599032373-a4c25d5e6d48?w=400'" 
                    [alt]="movie.title"
                    class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700">
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <!-- Movie Info Overlay -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 class="text-xl font-bold text-white mb-2">{{ movie.title }}</h3>
                    <p class="text-cinema-light/80 text-sm mb-3 line-clamp-2">{{ movie.description }}</p>
                    <div class="flex items-center justify-between">
                      <span class="bg-cinema-accent text-white text-xs px-2 py-1 rounded-full">{{ movie.rating }}</span>
                      <span class="text-cinema-light/60 text-sm">{{ movie.minute_duration }} min</span>
                    </div>
                  </div>
                </div>
                
                <!-- Floating Action Button -->
                <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button class="w-12 h-12 bg-cinema-accent hover:bg-cinema-accent/80 rounded-full flex items-center justify-center text-white transform hover:scale-110 transition-all duration-200">
                    ▶️
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <button 
              (click)="navigateToMovies()"
              class="btn-primary text-lg px-8 py-4 transform hover:scale-105">
              View All Movies
            </button>
          </div>
        </div>
      </section>
      
      <!-- Premium Experience Section -->
      <section class="py-20 bg-cinema-primary relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
              <h2 class="text-4xl md:text-5xl font-display font-bold text-gradient animate-on-scroll">
                Premium Cinema Experience
              </h2>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4 animate-on-scroll" [style.animation-delay]="'200ms'">
                  <div class="w-12 h-12 bg-gradient-to-r from-cinema-accent to-cinema-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-xl">🎬</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">4K Ultra HD Projection</h3>
                    <p class="text-cinema-light/70">Experience movies in stunning 4K resolution with HDR support for the most vivid and lifelike picture quality.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4 animate-on-scroll" [style.animation-delay]="'400ms'">
                  <div class="w-12 h-12 bg-gradient-to-r from-cinema-accent to-cinema-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-xl">🔊</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">Dolby Atmos Sound</h3>
                    <p class="text-cinema-light/70">Immerse yourself in three-dimensional sound that moves around you for a truly cinematic audio experience.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4 animate-on-scroll" [style.animation-delay]="'600ms'">
                  <div class="w-12 h-12 bg-gradient-to-r from-cinema-accent to-cinema-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-xl">🛋️</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">Luxury Seating</h3>
                    <p class="text-cinema-light/70">Relax in our premium reclining seats with extra legroom and personal cup holders for ultimate comfort.</p>
                  </div>
                </div>
              </div>
              
              <button 
                (click)="navigateToTheaters()"
                class="btn-primary text-lg px-8 py-4 transform hover:scale-105 animate-on-scroll" 
                [style.animation-delay]="'800ms'">
                Explore Our Theaters
              </button>
            </div>
            
            <div class="relative">
              <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1489599032373-a4c25d5e6d48?w=800&h=600&fit=crop" 
                  alt="Premium Theater" 
                  class="w-full h-full object-cover">
              </div>
              
              <!-- Floating Stats -->
              <div class="absolute -top-8 -right-8 bg-gradient-card rounded-xl p-6 shadow-2xl animate-float">
                <div class="text-center">
                  <div class="text-3xl font-bold text-gradient">12</div>
                  <div class="text-cinema-light/70 text-sm">Premium Theaters</div>
                </div>
              </div>
              
              <div class="absolute -bottom-8 -left-8 bg-gradient-card rounded-xl p-6 shadow-2xl animate-float animation-delay-1000">
                <div class="text-center">
                  <div class="text-3xl font-bold text-gradient">4K</div>
                  <div class="text-cinema-light/70 text-sm">Ultra HD Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.1'><circle cx='30' cy='30' r='2'/></g></svg>')"></div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    @keyframes slow-zoom {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    
    @keyframes slide-up {
      0% { 
        opacity: 0; 
        transform: translateY(100px); 
      }
      100% { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes fade-in {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes floating {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(120deg); }
      66% { transform: translateY(5px) rotate(240deg); }
    }
    
    .animate-slow-zoom {
      animation: slow-zoom 20s ease-in-out infinite alternate;
    }
    
    .animate-slide-up {
      animation: slide-up 1s ease-out forwards;
      opacity: 0;
    }
    
    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
      opacity: 0;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .floating-element {
      animation: floating 6s ease-in-out infinite;
    }
    
    .animation-delay-500 {
      animation-delay: 0.5s;
    }
    
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    
    .animation-delay-1500 {
      animation-delay: 1.5s;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    .movie-card {
      animation: slide-up 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .animate-on-scroll {
      animation: slide-up 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredMovies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFeaturedMovies();
    this.setupScrollAnimations();
  }

  loadFeaturedMovies() {
    this.movieService.getMovies().subscribe(movies => {
      this.featuredMovies = movies.slice(0, 3); // Get first 3 movies as featured
    });
  }

  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with animate-on-scroll class
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }

  navigateToMovies() {
    this.router.navigate(['/movies']);
  }

  navigateToShowtimes() {
    this.router.navigate(['/showtimes']);
  }

  navigateToTheaters() {
    this.router.navigate(['/theaters']);
  }

  selectMovie(movie: Movie) {
    console.log('Selected movie:', movie);
    // Navigate to movie details
    this.router.navigate(['/movies', movie.id]);
  }
}