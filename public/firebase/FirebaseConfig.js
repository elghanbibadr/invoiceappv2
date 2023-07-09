// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGEZfhYyadukBggW_4OZRKVtaVpW7XLzw",
    authDomain: "invoiceapp-5ebce.firebaseapp.com",
    projectId: "invoiceapp-5ebce",
    storageBucket: "invoiceapp-5ebce.appspot.com",
    messagingSenderId: "358960547875",
    appId: "1:358960547875:web:bca10f3d1f2891cc1ac996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Firestore instance
const db = getFirestore(app);

// Read and parse the JSON file
const jsonData = require('./path/to/data.json');
const data = [
    {
        "id": "RT3080",
        "createdAt": "2021-08-18",
        "paymentDue": "2021-08-19",
        "description": "Re-branding",
        "paymentTerms": 1,
        "clientName": "Jensen Huang",
        "clientEmail": "jensenh@mail.com",
        "status": "paid",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "106 Kendell Street",
            "city": "Sharrington",
            "postCode": "NR24 5WQ",
            "country": "United Kingdom"
        },
        "items": [
            {
                "name": "Brand Guidelines",
                "quantity": 1,
                "price": 1800.90,
                "total": 1800.90
            }
        ],
        "total": 1800.90
    },
    {
        "id": "XM9141",
        "createdAt": "2021-08-21",
        "paymentDue": "2021-09-20",
        "description": "Graphic Design",
        "paymentTerms": 30,
        "clientName": "Alex Grim",
        "clientEmail": "alexgrim@mail.com",
        "status": "pending",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "84 Church Way",
            "city": "Bradford",
            "postCode": "BD1 9PB",
            "country": "United Kingdom"
        },
        "items": [
            {
                "name": "Banner Design",
                "quantity": 1,
                "price": 156.00,
                "total": 156.00
            },
            {
                "name": "Email Design",
                "quantity": 2,
                "price": 200.00,
                "total": 400.00
            }
        ],
        "total": 556.00
    },
    {
        "id": "RG0314",
        "createdAt": "2021-09-24",
        "paymentDue": "2021-10-01",
        "description": "Website Redesign",
        "paymentTerms": 7,
        "clientName": "John Morrison",
        "clientEmail": "jm@myco.com",
        "status": "paid",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "79 Dover Road",
            "city": "Westhall",
            "postCode": "IP19 3PF",
            "country": "United Kingdom"
        },
        "items": [
            {
                "name": "Website Redesign",
                "quantity": 1,
                "price": 14002.33,
                "total": 14002.33
            }
        ],
        "total": 14002.33
    },
    {
        "id": "RT2080",
        "createdAt": "2021-10-11",
        "paymentDue": "2021-10-12",
        "description": "Logo Concept",
        "paymentTerms": 1,
        "clientName": "Alysa Werner",
        "clientEmail": "alysa@email.co.uk",
        "status": "pending",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "63 Warwick Road",
            "city": "Carlisle",
            "postCode": "CA20 2TG",
            "country": "United Kingdom"
        },
        "items": [
            {
                "name": "Logo Sketches",
                "quantity": 1,
                "price": 102.04,
                "total": 102.04
            }
        ],
        "total": 102.04
    },
    {
        "id": "AA1449",
        "createdAt": "2021-10-7",
        "paymentDue": "2021-10-14",
        "description": "Re-branding",
        "paymentTerms": 7,
        "clientName": "Mellisa Clarke",
        "clientEmail": "mellisa.clarke@example.com",
        "status": "pending",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "46 Abbey Row",
            "city": "Cambridge",
            "postCode": "CB5 6EG",
            "country": "United Kingdom"
        },
        "items": [
            {
                "name": "New Logo",
                "quantity": 1,
                "price": 1532.33,
                "total": 1532.33
            },
            {
                "name": "Brand Guidelines",
                "quantity": 1,
                "price": 2500.00,
                "total": 2500.00
            }
        ],
        "total": 4032.33
    },
    {
        "id": "TY9141",
        "createdAt": "2021-10-01",
        "paymentDue": "2021-10-31",
        "description": "Landing Page Design",
        "paymentTerms": 30,
        "clientName": "Thomas Wayne",
        "clientEmail": "thomas@dc.com",
        "status": "pending",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "3964  Queens Lane",
            "city": "Gotham",
            "postCode": "60457",
            "country": "United States of America"
        },
        "items": [
            {
                "name": "Web Design",
                "quantity": 1,
                "price": 6155.91,
                "total": 6155.91
            }
        ],
        "total": 6155.91
    },
    {
        "id": "FV2353",
        "createdAt": "2021-11-05",
        "paymentDue": "2021-11-12",
        "description": "Logo Re-design",
        "paymentTerms": 7,
        "clientName": "Anita Wainwright",
        "clientEmail": "",
        "status": "draft",
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "",
            "city": "",
            "postCode": "",
            "country": ""
        },
        "items": [
            {
                "name": "Logo Re-design",
                "quantity": 1,
                "price": 3102.04,
                "total": 3102.04
            }
        ],
        "total": 3102.04
    }
]

// Iterate over the data and add to Firestore
data.forEach(async (data) => {
    try {
        // Add data to Firestore
        await addDoc(collection(db, 'invoices'), data);
        console.log('Data added successfully!');
    } catch (error) {
        console.error('Error adding data:', error);
    }
});