# Order Service

This is the Order microservice for an e-commerce platform, built using Node.js, Express, and MongoDB.

## 🛠 Tech Stack
- Node.js + Express
- MongoDB with Mongoose ODM
- Docker & Docker Compose

## 🚀 Running the service

### Prerequisites
- Docker and Docker Compose installed
- (Optional) VS Code as IDE

### Steps to Run

1. Open terminal in this directory.
2. Run the following command:

```bash
docker-compose up --build
```

This will start both the Order service and MongoDB.

### API Endpoints

- **GET /** — Health check
- **POST /orders** — Create a new order
- **GET /orders** — Get all orders
- **GET /orders/:id** — Get specific order by ID
- **DELETE /orders/:id** — Delete an order

### Sample Request

```bash
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{
  "userId": "user123",
  "items": [{"productId": "p001", "quantity": 2}],
  "totalAmount": 500
}'
```

### Output

```json
{
  "_id": "64xxxxxx",
  "userId": "user123",
  "items": [{"productId": "p001", "quantity": 2}],
  "totalAmount": 500,
  "status": "pending",
  "createdAt": "2025-05-01T12:00:00.000Z"
}
```

### 🧪 Testing
Use `curl`, Postman, or any API client.

### 🐳 Minikube Deployment (Later)
1. Build Docker image using Minikube's Docker daemon
2. Create K8s manifests (Deployment + Service for app and MongoDB)
3. Apply with `kubectl apply -f`

---
"# orderService" 
