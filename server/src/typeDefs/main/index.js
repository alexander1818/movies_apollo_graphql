const {gql} = require('apollo-server');

module.exports = gql`
    type Query {
        movies(page: Int): Movies
        moviesByIds(ids:[Int]): [MovieByID]
        getMovieById(id: Int): MovieByID
        similarMovies(id: Int): Movies
        user(id: String): User
        allUsers: [User]
        popularMovies(page: Int): Movies
#        newUser(input: UserInput): User
    }

    type Movies {
        page: Int!
        totalResults: Int!
        totalPages: Int!
        results: [Movie]!
    }

    type Movie {
        id: ID!
        title: String!
        originalTitle: String
        originalLanguage: String
        releaseDate(format: String): String!
        posterPath: String
        genre_ids: [Int]
        adult: Boolean
        overview: String
        popularity: Float
        video: Boolean
        voteCount: Int
        voteAverage: Float
    }

    type MovieByID {
        adult: Boolean
        backdropPath: String
        budget: Int
        genres: [Genre]
        homepage: String
        id: ID!
        imdbId: String
        originalLanguage: String
        originalTitle: String
        overview: String
        popularity: Float
        posterPath: String
        productionCompanies: [ProductionCompanies]
        productionCountries: [ProductionCountry]
        releaseDate(format: String): String!
        revenue: Int
        runtime: Int
        spokenLanguages: [SpokenLangs]
        tagline: String
        title: String
        video: Boolean
        voteAverage: Float
        voteCount: Int
    }

    type ProductionCompanies {
        name: String
        id: ID
        logo_path: String
        origin_country: String
    }

    type ProductionCountry {
        iso_3166_1: String
        name: String
    }

    type SpokenLangs {
        iso_639_1: String
        name: String
    }

    type Genre {
        id: Int!
        name: String
    }

    type User {
        id: ID
        userName: String
        age: String
    }

    type NewUser {
        username: String
        email: String
        password: String
        token: String
    }

    input RegisterInput {
        username: String
        email: String
        password: String
    }

    input LoginInput {
        email: String
        password: String
    }

    input UserInput {
        id: ID
        userName: String!
        age: String!
    }

    type Mutation {
        newUser(input: UserInput): User
        registerUser(registerInput: RegisterInput): NewUser
        loginUser(loginInput: LoginInput): NewUser
    }
`;

