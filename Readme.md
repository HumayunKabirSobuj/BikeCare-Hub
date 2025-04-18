# BikeCare-Hub


This a backend API for a **Bike Servicing Management System** that allows a bike servicing center to manage `customers`, `bikes`, and `service` records. The API will support CRUD operations for bikes, customers, and services, and include special endpoints for assigning and completing servicing jobs.

Live:
```
https://bikecare-hub.vercel.app
```

* * *

### 🛠 **Technologies Used**

*   **Node.js**
*   **Express.js**
*   **TypeScript**
*   **Prisma ORM**
*   **PostgreSQL**

* * *



### 📦 **API Features & Endpoints**

* * *

#### 1\. **Customer Management**

* * *

### ✅ **1\.** **`POST /api/customers`** **- Create a new customer**

#### 📥 Request Body

##### Example

```perl
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890"
}
```

#### 📤 Response Example (201 Created)

##### Example

```json
{
  "success": true,
  "message": "Customer created successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

* * *

### ✅ **2\.** **`GET /api/customers`** **- Get all customers**

#### 📤 Response Example (200 Ok)

```perl
{
  "success": true,
  "message": "Customers fetched successfully",
  "data": [
    {
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "createdAt": "2025-04-11T12:34:56.789Z"
    },
    {...}
  ]
}
```

* * *


### ✅ **3\.** **`GET /api/customers/customerId`** **- Get a specific customer by ID**

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Customer fetched successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

* * *

### ✅ **4\.** **`PUT /api/customers/customerId`** **- Update customer details**

#### 📥 Request Body (any of the fields can be updated)
##### Example
```json
{
  "name": "Johnathan Doe",
  "phone": "555-123-9999"
}
```

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Customer updated successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "Johnathan Doe",
    "email": "john.doe@example.com",
    "phone": "555-123-9999",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

####   

* * *

### ✅ **5\.** **`DELETE /api/customers/customerId`** **- Delete a customer**

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Customer deleted successfully"
}
```


#### 2\. **Bike Management**

* * *

### ✅ **1\.** **`POST /api/bikes`** **- Add a new bike**

#### 📥 Request Body (201 Created)
##### Example
```json
{
  "brand": "Yamaha",
  "model": "R15",
  "year": 2022,
  "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
}
```

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Bike added successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}
```

* * *

### ✅ **2\.** **`GET /api/bikes`** **- Get all bikes**

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Bikes fetched successfully",
  "data": [
    {
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "brand": "Yamaha",
      "model": "R15",
      "year": 2022,
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
    }
  ]
}
```

* * *

### ✅ **3\.** **`GET /api/bikes/bikeId`** **- Get a specific bike by ID**

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Bike fetched successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}
```


#### 3\. **Service Management**

* * *

### ✅ **1\.** **`POST /api/services`** **– Create a service record**

#### 📥 Request Body
##### Example
```json
{
  "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
  "serviceDate": "2025-04-11T10:00:00.000Z",
  "description": "Oil change",
  "status": "pending"
}
```

#### 📤 Response Example (201 Created)
##### Example
```json
{
  "success": true,
  "message": "Service record created successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}
```

* * *

### ✅ **2\.** **`GET /api/services`** **– Get all service records**

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Service records fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-11T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    },
    {...}
  ]
}
```

* * *

### ✅ **3\.** **`GET /api/services/serviceId`** **– Get a specific service record**

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Service record fetched successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}
```

* * *

### ✅ **4\.** **`PUT /api/services/serviceId/complete`** **– Mark a service as completed**

#### 📥 Request Body (optional: custom `completionDate`, else default to `now`)
##### Example
```json
{
  "completionDate": "2025-04-11T15:30:00.000Z"
}
```

#### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Service marked as completed",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": "2025-04-11T15:30:00.000Z",
    "description": "Oil change",
    "status": "done"
  }
}
```

* * *



### **Standardized Error Response Structure**
##### Example
```plain
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
}


```

#### ⏳ **Pending or Overdue Services**

### ✅ **GET** **`/api/services/status`** **– Pending or Overdue Services (older than 7 days)**

This route returns all services that:

*   Have `status` = `"pending"` or `"in-progress"`, **and**
*   `serviceDate` is **older than 7 days**

* * *

### 📤 Response Example (200 Ok)
##### Example
```json
{
  "success": true,
  "message": "Overdue or pending services fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-01T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    },
    {
      "serviceId": "c9bce2ff-44a2-4b3f-bef7-04f5e35d21d2",
      "bikeId": "a3d2d3cb-f72f-4b63-a7d6-20e57bc30ef1",
      "serviceDate": "2025-04-02T12:00:00.000Z",
      "completionDate": null,
      "description": "Engine tuning",
      "status": "in-progress"
    }
  ]
}
```


## Installation
 Clone the repository:

```
git clone https://github.com/HumayunKabirSobuj/BikeCare-Hub
```
Navigate to the project folder and install packages :

```
npm install
```
Create a .env file with the following:

- DATABASE_URL: Collect it Form Supabase.
- DIRECT_URL: Collect it Form Supabase.
- ENABLE_PRISMA_CACHING=false

  

Run the server:

```
npm run dev
```


* * *

