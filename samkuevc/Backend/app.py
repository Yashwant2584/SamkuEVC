from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import json
from datetime import datetime

app = Flask(__name__)

# CORS Configuration
CORS(app, resources={r"/*": {
    "origins": ["http://localhost:5173", "https://samku-evc.vercel.app"],
    "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

# MongoDB Connection
MONGODB_URI = 'mongodb+srv://biradaromkar4176:omkar2003@cluster1.dso0r.mongodb.net/'
client = MongoClient(MONGODB_URI)
db = client.samku_applications

# Collections
contact_collection = db.contacts
enquiry_collection = db.enquiries
careers_collection = db.careers
charging_stations_collection = db.charging_stations
service_centers_collection = db.franchises

# JSON Encoder for ObjectId
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

app.json_encoder = JSONEncoder


# Service Center Franchise Endpoint
@app.route('/api/franchise-application', methods=['POST'])
def submit_franchise_application():
    try:
        data = request.form.to_dict()
        files = request.files

        application_data = {
            'personalInfo': {
                'fullName': data.get('personalInfo.fullName', ''),
                'email': data.get('personalInfo.email', ''),
                'phone': data.get('personalInfo.phone', ''),
                'address': data.get('personalInfo.address', ''),
                'city': data.get('personalInfo.city', ''),
                'state': data.get('personalInfo.state', ''),
                'pincode': data.get('personalInfo.pincode', '')
            },
            'businessInfo': {
                'businessExperience': data.get('businessInfo.businessExperience', ''),
                'companyName': data.get('businessInfo.companyName', ''),
                'gstNumber': data.get('businessInfo.gstNumber', ''),
                'investmentCapacity': data.get('businessInfo.investmentCapacity', ''),
                'preferredLocation': data.get('businessInfo.preferredLocation', ''),
                'propertySize': data.get('businessInfo.propertySize', '')
            },
            'technicalInfo': {
                'technicalBackground': data.get('technicalInfo.technicalBackground', ''),
                'automobileExperience': data.get('technicalInfo.automobileExperience', ''),
                'evKnowledge': data.get('technicalInfo.evKnowledge', ''),
                'certifications': data.get('technicalInfo.certifications', '')
            },
            'financialInfo': {
                'expectedInvestment': data.get('financialInfo.expectedInvestment', ''),
                'fundingSource': data.get('financialInfo.fundingSource', ''),
                'timelineToStart': data.get('financialInfo.timelineToStart', '')
            },
            'additionalInfo': {
                'whyJoinUs': data.get('additionalInfo.whyJoinUs', ''),
                'references': data.get('additionalInfo.references', '')
            },
            'status': 'Pending',
            'createdAt': datetime.utcnow(),
            'updatedAt': datetime.utcnow()
        }

        result = service_centers_collection.insert_one(application_data)
        
        return jsonify({
            "message": "Franchise application submitted successfully",
            "application_id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

# Charging Station Application Endpoint
@app.route('/api/charging-station-application', methods=['POST'])
def submit_charging_station_application():
    try:
        # Get form data
        data = request.form.to_dict()
        files = request.files

        # Prepare application data
        application_data = {
            'personalInfo': {
                'fullName': data.get('personalInfo.fullName', ''),
                'email': data.get('personalInfo.email', ''),
                'phone': data.get('personalInfo.phone', ''),
                'address': data.get('personalInfo.address', ''),
                'city': data.get('personalInfo.city', ''),
                'state': data.get('personalInfo.state', ''),
                'pincode': data.get('personalInfo.pincode', '')
            },
            'businessInfo': {
                'businessExperience': data.get('businessInfo.businessExperience', ''),
                'gstNumber': data.get('businessInfo.gstNumber', ''),
                'investmentCapacity': data.get('businessInfo.investmentCapacity', ''),
                'preferredLocation': data.get('businessInfo.preferredLocation', ''),
                'propertySize': data.get('businessInfo.propertySize', ''),
                'companyName': data.get('businessInfo.companyName', '')
            },
            'technicalInfo': {
                'electricalInfrastructure': data.get('technicalInfo.electricalInfrastructure', ''),
                'gridConnectivity': data.get('technicalInfo.gridConnectivity', ''),
                'powerAvailability': data.get('technicalInfo.powerAvailability', ''),
                'certifications': data.get('technicalInfo.certifications', '')
            },
            'financialInfo': {
                'expectedInvestment': data.get('financialInfo.expectedInvestment', ''),
                'fundingSource': data.get('financialInfo.fundingSource', ''),
                'timelineToStart': data.get('financialInfo.timelineToStart', '')
            },
            'additionalInfo': {
                'whyJoinUs': data.get('additionalInfo.whyJoinUs', ''),
                'additionalComments': data.get('additionalInfo.additionalComments', ''),
                'references': data.get('additionalInfo.references', '')
            },
            'status': 'Pending',
            'createdAt': datetime.utcnow(),
            'updatedAt': datetime.utcnow()
        }

        # Insert into MongoDB
        result = charging_stations_collection.insert_one(application_data)
        
        return jsonify({
            "message": "Charging station application submitted successfully",
            "application_id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500




# Contact Endpoint (Updated for Contact Component)
@app.route('/api/contact', methods=['POST'])
def submit_contact():
    try:
        # Get form data
        data = request.form.to_dict()

        # Prepare contact data
        contact_data = {
            'name': data.get('name', ''),
            'email': data.get('email', ''),
            'subject': data.get('subject', ''),
            'message': data.get('message', ''),
            'status': 'Pending',
            'createdAt': datetime.utcnow(),
            'updatedAt': datetime.utcnow()
        }

        # Insert into MongoDB
        result = contact_collection.insert_one(contact_data)
        
        return jsonify({
            "message": "Contact message submitted successfully",
            "contact_id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Enquiry Endpoint (Updated for Enquiry Component)
@app.route('/api/enquiry', methods=['POST'])
def submit_enquiry():
    try:
        # Get form data
        data = request.form.to_dict()

        # Prepare enquiry data
        enquiry_data = {
            'name': data.get('name', ''),
            'email': data.get('email', ''),
            'phone': data.get('phone', ''),
            'product': data.get('product', ''),
            'message': data.get('message', ''),
            'status': 'Pending',
            'createdAt': datetime.utcnow(),
            'updatedAt': datetime.utcnow()
        }

        # Insert into MongoDB
        result = enquiry_collection.insert_one(enquiry_data)
        
        return jsonify({
            "message": "Enquiry submitted successfully",
            "enquiry_id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Careers Application Endpoint (Updated for CareersModal Component)
@app.route('/api/careers-application', methods=['POST'])
def submit_careers_application():
    try:
        # Get form data and files
        data = request.form.to_dict()
        files = request.files

        # Prepare careers application data
        application_data = {
            'fullName': data.get('fullName', ''),
            'email': data.get('email', ''),
            'phone': data.get('phone', ''),
            'position': data.get('position', ''),
            'experience': data.get('experience', ''),
            'status': 'Pending',
            'createdAt': datetime.utcnow(),
            'updatedAt': datetime.utcnow()
        }

        # Handle resume upload (currently stored in MongoDB, Cloudinary commented out)
        if 'resume' in files:
            resume = files['resume']
            application_data['resume'] = {
                'filename': resume.filename,
                'content_type': resume.content_type,
                # Uncomment and configure Cloudinary if needed
                # 'url': cloudinary.uploader.upload(resume, folder="careers_resumes", public_id=f"resume_{datetime.now().timestamp()}")['url']
            }

        # Handle photo upload (optional)
        if 'photo' in files:
            photo = files['photo']
            application_data['photo'] = {
                'filename': photo.filename,
                'content_type': photo.content_type,
                # Uncomment and configure Cloudinary if needed
                # 'url': cloudinary.uploader.upload(photo, folder="careers_photos", public_id=f"career_photo_{datetime.now().timestamp()}")['url']
            }

        # Insert into MongoDB
        result = careers_collection.insert_one(application_data)
        
        return jsonify({
            "message": "Careers application submitted successfully",
            "application_id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Admin Panel Endpoints (Updated to match new collections)
@app.route('/api/admin/contacts', methods=['GET'])
def get_contacts():
    try:
        contacts = list(contact_collection.find().sort('createdAt', -1))
        for contact in contacts:
            contact['_id'] = str(contact['_id'])
            contact['createdAt'] = contact['createdAt'].isoformat()
            contact['updatedAt'] = contact['updatedAt'].isoformat()
        return jsonify(contacts), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/admin/enquiries', methods=['GET'])
def get_enquiries():
    try:
        enquiries = list(enquiry_collection.find().sort('createdAt', -1))
        for enquiry in enquiries:
            enquiry['_id'] = str(enquiry['_id'])
            enquiry['createdAt'] = enquiry['createdAt'].isoformat()
            enquiry['updatedAt'] = enquiry['updatedAt'].isoformat()
        return jsonify(enquiries), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/admin/careers', methods=['GET'])
def get_careers():
    try:
        applications = list(careers_collection.find().sort('createdAt', -1))
        for app in applications:
            app['_id'] = str(app['_id'])
            app['createdAt'] = app['createdAt'].isoformat()
            app['updatedAt'] = app['updatedAt'].isoformat()
        return jsonify(applications), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

# Update Status Endpoints
@app.route('/api/admin/<collection>/<id>', methods=['PUT'])
def update_application_status(collection, id):
    try:
        data = request.get_json()
        status = data.get('status')
        
        valid_collections = {
            'careers': careers_collection,
            'franchises': service_centers_collection,
            'charging-stations': charging_stations_collection,
            'enquiries': enquiry_collection,
            'contacts': contact_collection
        }
        
        if collection not in valid_collections:
            return jsonify({"error": "Invalid collection"}), 400
            
        if status not in ['Pending', 'Accepted', 'Rejected']:
            return jsonify({"error": "Invalid status"}), 400

        result = valid_collections[collection].update_one(
            {'_id': ObjectId(id)},
            {'$set': {
                'status': status,
                'updatedAt': datetime.utcnow()
            }}
        )
        
        if result.modified_count:
            return jsonify({"message": "Status updated successfully"}), 200
        return jsonify({"error": "Application not found"}), 404
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Add GET endpoints for missing collections
@app.route('/api/admin/franchises', methods=['GET'])
def get_franchises():
    try:
        applications = list(service_centers_collection.find().sort('createdAt', -1))
        for app in applications:
            app['_id'] = str(app['_id'])
            app['createdAt'] = app['createdAt'].isoformat()
            app['updatedAt'] = app['updatedAt'].isoformat()
        return jsonify(applications), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/admin/charging-stations', methods=['GET'])
def get_charging_stations():
    try:
        applications = list(charging_stations_collection.find().sort('createdAt', -1))
        for app in applications:
            app['_id'] = str(app['_id'])
            app['createdAt'] = app['createdAt'].isoformat()
            app['updatedAt'] = app['updatedAt'].isoformat()
        return jsonify(applications), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)