#!/bin/bash
cd ~/Node-learning

echo "🔄 Pulling latest code from GitHub..."
git pull origin main

echo "📦 Installing dependencies..."
npm install --production

echo "🚀 Restarting app with PM2..."
pm2 restart nodeapp

echo "✅ Deployment finished!"
