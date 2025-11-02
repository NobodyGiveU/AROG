# Videos Folder

## How to Use LegPress.mp4 Video

The SessionsScreen will play "LegPress.mp4" when video upload completes.

### Option 1: Use Local Asset (Recommended)
1. Place `LegPress.mp4` in this folder: `assets/videos/LegPress.mp4`
2. Update `SessionsScreen.js` - uncomment Option 1 in the useEffect:
   ```javascript
   const asset = Asset.fromModule(require('../../../assets/videos/LegPress.mp4'));
   await asset.downloadAsync();
   setLegPressVideoUri(asset.localUri || asset.uri);
   ```

### Option 2: Use Remote URL
1. Upload `LegPress.mp4` to a server/cloud storage
2. Update `SessionsScreen.js` - replace the sample URL with your video URL:
   ```javascript
   setLegPressVideoUri('https://your-server.com/videos/LegPress.mp4');
   ```

### Option 3: Use Local File Path
- For testing with a file on device storage

## Video Specifications
- Format: MP4 (H.264 encoding recommended)
- Size: Under 50MB recommended for mobile
- Resolution: 720p or 1080p

## Current Setup
Currently using a sample video URL for testing. Replace with your LegPress.mp4 when ready!

