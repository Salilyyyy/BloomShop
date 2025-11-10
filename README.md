# BloomShop

BloomShop is a Vite-powered React application for showcasing flower shop products.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Docker Deployment

1. Build the production image:
   ```bash
   docker build -t bloomshop:latest .
   ```
2. Start the container:
   ```bash
   docker run --rm -d -p 8080:80 --name bloomshop bloomshop:latest
   ```
3. Visit the app at http://localhost:8080.
4. When finished, stop the container:
   ```bash
   docker stop bloomshop
   ```
