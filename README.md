# Like Pinterest
핀터레스트와 같이 이미지를 올리는 웹 사이트<br>
Json-Server와 간단한 node.js 서버로 Front end를 중심적으로 제작<br>
이미지 태그 검색, 상세페이지 팝업, 페이지네이션, 로그인, 댓글, 좋아요 기능 구현<br>
<br>
<br>
### Available Scripts
실행방법 Json Placeholder에서 제공하는 Json-Sever를 사용했으며 이미지를 public 폴더로 전송해주는 것은 node.js를 사용<br>
Json-server : data.json의 정보를 Json 형식으로 뿌려준다.<br>
node.js : formData로 이미지를 받으면 upload_imgs 라는 폴더로 저장한다.<br>
(리액트에서 public 폴더의 변경을 감지해 새로고침을 해주기 때문에 Public 폴더 바깥으로 변경했다.)<br>
react : 프론트 서버 구동<br>

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
localhost:8000 으로 Json-Server가 구동이 되면 성공 <br>
/posts : 게시물 정보<br>
/users : 유저 정보<br>
/comments : 댓글 정보<br>

```bash
 yarn uploads run
```
localhost:7000 으로 node.js 서버가 구동이 되면 성공<br>
/filelist : upload_imgs directory 안에 있는 파일이름을 리스트로 제공<br>
/filelost/$(파일이름) : upload_imgs 폴더 안에 $(파일이름)과 매치된 파일을 Jpeg 이미지 파일로 제공<br>

```bash
 yarn start
```
프론트 페이지가 정상적으로 로딩이 되면 구동 완료
<br>
<br>

### 로그인
*ID : test1@naver.com<br>*
*PW : 1234<br>*
<br>
기존 아이디로 로그인을 하거나 회원가입을 한 후 로그인을 하면 메뉴들이 변경되며 글 작성이 가능<br>
JWT를 사용하지 않았고 로그인 정보를 로컬 스토리지나 쿠키에 저장하지 않아서 새로고침하면 재 로그인이 필요<br>
