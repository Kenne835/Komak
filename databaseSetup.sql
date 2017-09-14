Database Name: Solo_Project

Last Updated: 8/16 @ 3:40pm

CREATE TABLE "users" (
    "id" serial primary key,
    "name" varchar(100) not null,
    "username" varchar(50) not null,
    "password" varchar(400) not null
);

CREATE TABLE "translations" (
    "id" serial primary key,
    "translation" varchar(300) not null,
    "value" varchar(300) not null
);

INSERT INTO "translations" (translation, value)
VALUES
('I am presenting with an ailment in the region of my arm.', 'arm'),
('I am presenting with an ailment in the region of my leg.', 'leg'),
('I am presenting with an ailment in the region of my abdomen.', 'abdomen'),
('I am presenting with an ailment in the region of my chest', 'chest'),
('I am presenting with an ailment in the region of my head.', 'head'),
('I am presenting with an ailment in the region of my back.', 'back'),
('I am presenting with an ailment in the region of my neck.', 'neck'),
('More precisely, the ailment is located in my foot.', 'foot'),
('More precisely, the ailment is located in my knee.', 'knee'),
('More precisely, the ailment is located in my shin.', 'shin'),
('More precisely, the ailment is located in my thigh.', 'thigh'),
('More precisely, the ailment is located in my hand.', 'hand'),
('More precisely, the ailment is located in my forearm.', 'forearm'),
('More precisely, the ailment is located in my elbow.', 'elbow'),
('More precisely, the ailment is located in my upper arm.', 'upperArm'),
('More precisely, the ailment is located in my upper back.', 'upperBack'),
('More precisely, the ailment is located in my lower back.', 'lowerBack'),
('I am experiencing numbness.', 'numbness'),
('I am experiencing burning pain.', 'burning-pain'),
('I am experiencing itchiness.', 'itchiness'),
('I am experiencing stabbing pain.', 'stabbing-pain'),
('I am experiencing aching pain.', 'aching-pain'),
('There is a laceration.', 'laceration'),
('There is a burn.', 'burn'),
('I am experiencing a lack of control over the affected area.', 'lack-of-control'),
('I am experiencing incontinence.', 'incontinence'),
('I am experiencing shortness of breath.', 'breathless'),
('I am experiencing heart palpitations.', 'palpitations'),
('I am experiencing radiating pain.', 'radiating-pain'),
('I have experienced loss of consciousness.', 'unconscious'),
('I am experiencing confusion.', 'confusion'),
('I am experiencing loss of vision.', 'lack-of-vision'),
('I have experienced head trauma.', 'head-trauma'),
('I am experiencing fever/chills/sweats.', 'fever'),
('I cannot maintain my balance.', 'inbalanced'),
('I am experiencing rapid weight loss.', 'weight-loss'),
('I am experiencing rapid weight gain.', 'weight-gain'),
('I have a health history of cancer.', 'cancer'),
('I have a health history of diabetes.', 'diabetes'),
('I have a health history of heart disease.', 'heart-disease'),
('I have a health history of COPD.', 'copd'),
('I have a health history of stroke.', 'stroke'),
('I have a health history of Alzheimers Disease.', 'alzheimers-disease'),
('I have a health history of Multiple Sclerosis.', 'multiple-sclerosis'),
('I have a health history of Parkinsons Disease.', 'parkinsons-disease'),
('I have a health history of kidney disease.', 'kidney-disease'),
('I have a health history of liver disease.', 'liver-disease'),
('I have a health history of high blood pressure.', 'high-blood-pressure'),
('I have a health history of ulcer or GERD.', 'ulcer-gerd'),
('I have a health history of tuberculosis.', 'tuberculosis'),
('I have a health history of asthma.', 'asthma'),
('I have a health history of epilepsy.', 'epilepsy'),
('I have had a recent surgery.', 'recent-surgery'),
('I am allergic to antibiotics', 'antibiotics'),
('I am allergic to penicillin', 'penicillin');
