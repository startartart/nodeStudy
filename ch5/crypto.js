const crypto = require("crypto");

const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString("base64"));
        });
    })
};

const createCryptoPassword = async (plainPassword) => {
    const salt = await createSalt();

    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if (err) reject(err);
            resolve({
                password: key.toString("base64"), salt
            });
        });
    })
};

const getCryptoPassword = async (plainPassword, salt) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if (err) reject(err);
            resolve({
                password: key.toString("base64"), salt
            });
        });
    })
};

// 심화 문제
createCryptoPassword("1234").then((result) => {
    console.log(`데이터베이스 저장이 되었습니다. password는 ${result.password},
    salt는 ${result.salt} 입니다.`);
    getCryptoPassword("1234", result.salt).then((result) => {
        console.log(`데이터베이스에서 가져온 password는 ${result.password},
        salt는 ${result.salt} 입니다.`);
    });
});