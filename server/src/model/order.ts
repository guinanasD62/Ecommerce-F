import mongoose, { Schema, Document } from 'mongoose';

const orderSchema = new mongoose.Schema({
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        title: {
            type: String,
        },
        img: {
            type: String
        },
        color: {
            type: String
        },
        size: {
            type: String
        },
        stock: {
            type: Number
        }
    }],
    users: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    }],
    delivered: {
        type: Boolean,
        default: false,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    orderStatus: {
        type: String,
        enum: [ 'checkOut', 'delivered'],
        default: 'checkOut'
    },
    currentStock: {
        type: Number,
    }
}, {
    timestamps: true
});

// Export the Mongoose model
export const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);
