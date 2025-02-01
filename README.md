# VueLnk

A modern URL shortener built with Vue 3, featuring a clean UI and link management capabilities. Designed to be modular, scalable, and easy to maintain.

[![GitHub Repo stars](https://img.shields.io/github/stars/vuejsco/vuelnk?style=for-the-badge&logo=github)](https://github.com/vuejsco/vuelnk)
[![GitHub license](https://img.shields.io/github/license/vuejsco/vuelnk?style=for-the-badge&logo=github)](https://github.com/vuejsco/vuelnk/blob/main/LICENSE)

## Features

- **URL Shortening**: Create short, memorable links instantly.
- **Link Management**: Track and manage your shortened URLs.
- **Visit Analytics**: Monitor link performance with visit counts.
- **Authentication**: Secure login system with session management.
- **Offline Mode**: Works without external API dependencies using mock data.
- **Modular Architecture**: Easy to extend and customize.
- **Responsive Design**: Beautiful UI that works on all devices.

## Tech Stack

- **Vue 3**: Progressive JavaScript framework.
- **TypeScript**: For type safety and better developer experience.
- **Pinia**: State management.
- **Vue Router**: Client-side routing.
- **Tailwind CSS**: Utility-first CSS framework.
- **Mock Data System**: Operates without external API connections.

## Project Structure

```textplain
src/
├── components/          # Reusable Vue components
│   ├── AuthComponent.vue   # Authentication form
│   ├── LinkList.vue        # List of shortened links
│   ├── RedirectHandler.vue # URL redirection
│   └── ShortenForm.vue     # URL shortening form
├── stores/             # Pinia stores
│   ├── auth.ts           # Authentication state
│   └── links.ts          # Links management
├── views/              # Page components
│   ├── HomeView.vue      # Landing page
│   └── DashboardView.vue # User dashboard
├── mocks/              # Mock data for offline functionality
├── types/              # TypeScript definitions
└── router/             # Vue Router configuration
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vuejsco/vuelnk.git
   ```

2. Install dependencies:

   ```bash
   cd vuelnk
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## Configuration

This project is highly configurable. Modify the following settings in `src/mocks` to switch between mock mode and real API integration:

- `useMockData: true` → Runs the app in offline mode.
- `useMockData: false` → Connects to external APIs.

## Features Breakdown

### URL Shortening

- Input validation.
- Automatic short code generation.
- Instant feedback.

### Link Management

- View all shortened links.
- Track visit counts.
- Copy shortened URLs.
- View creation dates.

### Authentication

- Email/password registration.
- Secure login system.
- Protected routes.
- Session management.

## Security

- Protected routes using Vue Router guards.
- Secure password handling.
- XSS protection.
- Input sanitization.

## Testing

Run the test suite:

```bash
npm run test
```

## Community

This extension is maintained by the **Vue JS Colombia Meetup Community**. Stay updated on new features and improvements:

- [GitHub](https://github.com/vuejsco)
- [Twitter (X)](https://twitter.com/vuejsco)

## Contributing

We welcome community contributions! To get started:

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a Pull Request.

For guidelines, refer to the [Contribution Guide](./CONTRIBUTING.md).

## Code of Conduct

We value a welcoming and inclusive community. Please review our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.

## Changelog

See the full list of changes in the [CHANGELOG.md](./CHANGELOG.md) file.

## License

This extension is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details.
