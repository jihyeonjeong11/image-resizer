1. 풀스택이어야 함
2. 앱 라우터 페이지 라우터는 관계없ㄱ음
3. 에러케이스를 잘 잡을 것

# 1. Profiler

nextJS 기반 app router, 서버에서 python으로 썸네일 및 리사이징 만들기 . 4. tumbnail generator using python nextjs
https://stackoverflow.com/questions/68013605/running-python-scripts-in-next-js
https://stackoverflow.com/questions/68013605/running-python-scripts-in-next-js

# 1-1. 유저스토리

- 유저는 닉네임을 정할 수 있다
- 유저는 스크린샷을 올릴 수 있다.
- 스크린샷을 올릴 시 리사이징되며 여러 포맷의 썸네일을 보여준다.

# 1-2. key features for SSR

- 애니메이션: tailwindCSS
- css: tailwindCSS
- image handler: nextJS server with python script
- debugging: custom side tab
- 세션 토큰: 서버 자체 처리 - 어떤 아이디, 비번이든 상관없이 access refresh만 구현
  https://imageresizer.com/

- ai-generated roadmap

1. Feature Analysis and Requirements Gathering
   Core Features:
   Bulk and individual resizing.
   Image compression (JPEG, PNG, GIF).
   Format conversion (e.g., PNG to JPG, HEIC to JPG).
   Cropping, flipping, rotating, and enlarging.
   Privacy measures like local processing (optional server-side for complex tasks).
   Supportive Features:
   Download functionality (single or zipped batch).
   Adjustable quality settings.
   Web-based, multi-platform compatibility.
   UI/UX:
   Minimalistic, ad-free interface.
   Drag-and-drop file upload.
   Progress indicators for batch operations.
2. Technology Stack Selection
   Frontend:
   Frameworks: React or Vue.js for dynamic UI.
   Tools: Framer Motion (animations), Tailwind CSS or styled-components (styling).
   Backend:
   Node.js or Django (for API services).
   Image processing libraries: Sharp (Node.js), or Pillow (Python).
   Storage and Hosting:
   Cloud: AWS S3, Firebase, or Azure for temporary image storage.
   Serverless for scalability (e.g., AWS Lambda).
   Security:
   HTTPS with TLS/SSL encryption.
   Data deletion policies (e.g., after 6 hours).
   Database: For user preferences or batch history (optional).
   NoSQL: MongoDB, Firebase.
   Relational: PostgreSQL.
3. Development Workflow
   Step 1: Prototyping:
   Create wireframes for each tool (resizer, compressor, converter).
   Develop the UI components and integrate a drag-and-drop interface.
   Step 2: Core Functionalities:
   Implement single and batch image upload with progress indicators.
   Add resizing and compression capabilities using libraries like Sharp.
   Step 3: Quality Controls:
   Enable sliders for compression quality and display before/after comparisons.
   Step 4: Conversion and Other Tools:
   Build format conversion and implement advanced tools (e.g., meme generator, enlarger).
   Step 5: Privacy and Security:
   Ensure local file handling or secure server-side processing.
   Automatic file deletion logic.
4. Testing and Optimization
   Performance:
   Stress test bulk operations.
   Optimize processing time for large files or batches.
   Cross-Browser Compatibility:
   Test on modern browsers and mobile platforms.
   Accessibility:
   Ensure WCAG compliance for a wider user base.
   Privacy Testing:
   Validate data deletion processes and SSL encryption.
5. Deployment and Maintenance
   Use CI/CD pipelines for automated testing and deployment.
   Host on a scalable platform like Vercel, Netlify, or AWS.
   Set up monitoring tools (e.g., Sentry, Datadog) to track errors and usage metrics.
6. Additional Considerations
   Monetization Options:
   Freemium model with advanced features locked behind subscriptions.
   One-time payment options for bulk usage.
   Community Engagement:
   Add tutorials or FAQs similar to ImageResizer.com.
   Build a feedback mechanism for continuous improvement.
   This roadmap should provide a clear path to developing a competitive product with features matching or exceeding those of ImageResizer.com.
