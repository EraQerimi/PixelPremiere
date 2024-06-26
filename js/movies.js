document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { title: 'Spider-Man: No Way Home', genre: 'action', image: 'images/image 1.jpg' },
        { title: 'The Batman', genre: 'action', image: 'images/image 2.jpg' },
        { title: 'Top Gun: Maverick', genre: 'action', image: 'images/image 3.jpg' },
        { title: 'Black Widow', genre: 'action', image: 'images/image 4.jpg' },
        { title: 'Fast & Furious 9', genre: 'action', image: 'images/image 5.jpg' },
        { title: 'No Time to Die', genre: 'action', image: 'images/image 6.jpg' },
        { title: 'Shang-Chi and the Legend of the Ten Rings', genre: 'action', image: 'images/image 7.jpg' },
        { title: 'Dune', genre: 'sci-fi', image: 'images/image 8.jpg' },
        { title: 'The Matrix Resurrections', genre: 'sci-fi', image: 'images/image 9.jpg' },
        { title: 'Ghostbusters: Afterlife', genre: 'comedy', image: 'images/image 10.jpg' },
        { title: 'Free Guy', genre: 'comedy', image: 'images/image 11.jpg' },
        { title: 'The French Dispatch', genre: 'comedy', image: 'images/image 12.jpg' },
        { title: 'Cruella', genre: 'comedy', image: 'images/image 13.jpg' },
        { title: 'Jungle Cruise', genre: 'comedy', image: 'images/image 14.jpg' },
        { title: 'Encanto', genre: 'animation', image: 'images/image 15.jpeg' },
        { title: 'Luca', genre: 'animation', image: 'images/image 16.jpg' },
        { title: 'Turning Red', genre: 'animation', image: 'images/image 17.jpg' },
        { title: 'The Mitchells vs. The Machines', genre: 'animation', image: 'images/image 18.jpg' },
        { title: 'Raya and the Last Dragon', genre: 'animation', image: 'images/image 19.jpeg' },
        { title: 'Soul', genre: 'animation', image: 'images/image 20.jpg' },
        { title: 'The Father', genre: 'drama', image: 'images/image 21.jpg' },
        { title: 'Nomadland', genre: 'drama', image: 'images/image 22.jpg' },
        { title: 'Nomadland', genre: 'drama', image: 'images/image 23.jpg' },
    ]
    

    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');

    // Funksioni për të lexuar parametrin e zhanrit nga URL-ja
    const lexoParametrinZhanrit = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('genre');
    };

    // Funksioni për të filtruar filmat bazuar në fjalët kyçe dhe zhanrin e zgjedhur
    const filterMovies = () => {
        const query = searchInput.value.toLowerCase();
        const selectedGenre = lexoParametrinZhanrit(); // Lexo zhanrin e zgjedhur nga URL-ja

        const filteredMovies = movies.filter(movie => {
            const titleMatches = movie.title.toLowerCase().includes(query);
            const genreMatches = !selectedGenre || movie.genre.toLowerCase() === selectedGenre;
            return titleMatches && genreMatches;
        });

        displayMovies(filteredMovies);
    };

    // Funksioni për të shfaqur filmat
    const displayMovies = (filteredMovies) => {
        moviesContainer.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            moviesContainer.appendChild(movieElement);
        });
    };

     // Dëgjuesi për ndryshime në inputin e kërkimit
     searchInput.addEventListener('input', filterMovies);

     // Paraqit filmat fillestarë
     filterMovies();
   
});

// Custom cursor
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');
    const cursorRing = document.querySelector('.cursor-ring');

    document.addEventListener('mousemove', function (e) {
        if (customCursor) {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        }
        if (cursorRing) {
            cursorRing.style.left = `${e.clientX}px`;
            cursorRing.style.top = `${e.clientY}px`;
        }
    });

    // Change cursor color on hover over nav links
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            if (customCursor) {
                customCursor.style.backgroundColor = '#fff';
            }
            if (cursorRing) {
                cursorRing.style.borderColor = '#fff';
            }
        });

        link.addEventListener('mouseout', function () {
            if (customCursor) {
                customCursor.style.backgroundColor = 'var(--main-color)';
            }
            if (cursorRing) {
                cursorRing.style.borderColor = 'var(--main-color)';
            }
        });
    });
});



