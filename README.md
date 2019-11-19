# StoreBook

RinChan : Minh moi lam Demo them Author (GET, POST, PUT, DELETE), cac ban lam cac phan con lai nha.
Hien database minh se can co them : 2 table tuong tu nhu Author

Step 1 : TABLE (BOOK) , gom cac field :

- name : ex : Naruto
- publicshDate : 20/11/2019
- PageCount : 123
- Description : hello
- Amount : 12$
- image : Them 1 input (<input type="file" name="image" />) de upload image cho Book do. ( Chuc nang upload Image minh co lam demo san roi, khong hieu cho nao thi alo len nha ).
- Tac gia : Lam 1 Select Option (show tat ca  Author hien co ra trong nay de lua chon)
  ==> Cac chuc nang can lam : (GET, POST, PUT, DELETE) Same Author

--------------------------------------------------------------------------------------

STEP 2 : TABLE (USER) , gon cac Field :

- Username : RinChan
- Email : rinchan@gmail.com
- password : hello (**\***) (Minh se chi Cach ma hoa passowrd sau : \*\*\*\*)
- Adress : 246/75 Hoa hung
- Phone : 0369045498
- Position : Vi tri (nguoi dung or admin)(show ra 1 SELECT, OPTION ) de lua chon
  ==> Cac chuc nang can lam : (GET, POST, PUT, DELETE) Same Author

### DOC: GIT :When working on the project, please observe the following workflow:

-Đăt tên nhánh theo feature/..., fix/..., task/..., or bugfix/... mapping to the TRELLO ticket label of story, bug, task and hotfix.
for example: feature/535-some-cool-feature.

Commits nên map với trello card id "[535] My commit message"
To merge back into the base branch, raise a pull request aginst this branch. All checks should pass and at least one approver is necessary to merge into base.
Keep your branch up to date at all times with the base branch by rebase only, to keep the tree clean.
On merging to base, use squash and merge, to keep the tree clean and to make rolling back changes easy
