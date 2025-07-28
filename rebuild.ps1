Write-Host "🛑 기존 컨테이너 중지 및 삭제 중..."
docker stop mini-frontend 2>$null
docker rm mini-frontend 2>$null

Write-Host "🔨 Docker 이미지 재빌드 중..."
docker build --no-cache -t mini-finance-frontend .

Write-Host "🚀 새 컨테이너 실행 중..."
docker run -d -p 3000:80 --name mini-frontend --network mini-finance-net mini-finance-frontend

Write-Host "✅ 완료! 브라우저에서 http://localhost:3000 열기"