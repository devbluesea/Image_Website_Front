# Like Pinterest
핀터레스트와 같이 이미지를 올리고 웹 사이트
Back end 없이 Json-Server와 간단한 node.js 서버로 Front end를 중심적으로 제작<br>
이미지 태그 검색, 상세페이지 팝업, 페이지네이션, 로그인, 댓글, 좋아요 기능 구현    
<br>
<br>
### Available Scripts
실행방법 Json Placeholder에서 제공하는 Json-Sever를 사용했으며 이미지를 public 폴더로 전송해주는 것은 node.js를 사용<br>
Json-server <br>
node.js <br>
react 구동이 필요하다.<br>

제일 먼저
```bash
npm install
```
Package.json을 가지고 node modules를 설치해준다.
<br>
<br>

### Json-Sever 실행
```bash
 yarn api run
```
localhost:8000 으로 Json-Server가 구동이 되면 성공

```bash
 yarn uploads run
```
localhost:7000 으로 node.js 서버가 구동이 되면 성공

```bash
 yarn start
```
프론트 페이지가 정상적으로 로딩이 되면 구동 완료
<br>
<br>

### 로그인
ID : test1@naver.com
PW : 1234
기존 아이디로 로그인을 하거나 회원가입을 한 후 로그인을 하면 메뉴들이 변경되며 글 작성이 가능<br>
JWT를 사용하지 않았고 로그인 정보를 로컬 스토리지나 쿠키에 저장하지 않아서 새로고침하면 재 로그인이 필요<br>
