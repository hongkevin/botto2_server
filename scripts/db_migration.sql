/** botto2users table creation **/
CREATE TABLE botto2users (
  id int(11) NOT NULL AUTO_INCREMENT,
  email varchar(250) NOT NULL,
  password varchar(250) NOT NULL,
  gender varchar(10) NOT NULL,
  user_img varchar(250),
  google_img varchar(250),
  PRIMARY KEY (id)
);

/** botto2meetings table creation **/
CREATE TABLE botto2meetings (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) NOT NULL,
  spot varchar(10) NOT NULL,
  age int(11) NOT NULL,
  number int(11) NOT NULL,
  theday varchar(250),
  introduction varchar(250),
  status varchar(10),
  partner_id int(11),
  PRIMARY KEY (id)
);

/** And foreign keys **/
ALTER TABLE products ADD CONSTRAINT fk_loan_request_id FOREIGN KEY (loan_request_id) REFERENCES loan_requests(id);