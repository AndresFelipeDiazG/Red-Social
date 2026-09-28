
INSERT INTO users (id, username, display_name, password_hash) VALUES
    ('11111111-1111-1111-1111-111111111111', 'acorrea',   'Ana Correa',
     '$2a$10$NEpssAucp9CBbxqg/hz0xelk2gFYH8vdZWrqOPj68SvEZktN3krsC'),

    ('22222222-2222-2222-2222-222222222222', 'jmendoza',  'Julian Mendoza',
     '$2a$10$r5mn9WWHVLSUOCxrMgzGr.qGhatU8CBLQLbyyHPJEvH98Vg1Wsn7K'),

    ('33333333-3333-3333-3333-333333333333', 'lvargas',   'Lucia Vargas',
     '$2a$10$sCgu/wIZNUST8qqEMXPW.e6Sjd9kGvewFi3ZZWPk8kx6DKtmzg7Ai'),

    ('44444444-4444-4444-4444-444444444444', 'dcastillo', 'Diego Castillo',
     '$2a$10$yJ0JbbBuVD6p6MTonq6vjOF2XqbxmCG11/ZCRQEmZjQAd7mcSS1Tm')

ON CONFLICT (id) DO NOTHING;
