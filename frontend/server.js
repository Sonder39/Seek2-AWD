import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const resData = {
    "data": "更新设置成功！",
    "error": 0,
    "msg": "success"
}
const logData = [
    {
        "ID": 1,
        "CreatedAt": "2024-06-04T10:39:41+08:00",
        "UpdatedAt": "2024-06-04T10:39:41+08:00",
        "DeletedAt": null,
        "Level": 1,
        "Kind": "system",
        "Content": "添加管理员账号成功，请妥善保管您的账号密码信息！"
    }
]

const rankData = [
    {
        name: "team1",
        points: "1314"
    },
    {
        name: "team2",
        points: "1413"
    }
]
const panelData = {
    "data": {
        "BuildTime": "Mon Feb  1 15:10:49 UTC 2021",
        "CheckDown": 0,
        "CommitSHA": "a45a2ecfe23ab2c194a08264a3f45cde34179698",
        "MemAllocated": "3.4 MiB",
        "NumGoroutine": 13,
        "PreviousRoundScore": 0,
        "SubmitFlag": 0,
        "TotalScore": 0,
        "Version": "v0.7.3"
    },
    "error": 0,
    "msg": "success"
}
const configData = {
    "data": [
        {
            "Key": "title",
            "Value": "CSSEC",
            "Kind": 0,
            "Options": ""
        },
        {
            "Key": "flag_prefix",
            "Value": "flag{",
            "Kind": 0,
            "Options": ""
        },
        {
            "Key": "flag_suffix",
            "Value": "}",
            "Kind": 0,
            "Options": ""
        },
        {
            "Key": "animate_asteroid",
            "Value": "true",
            "Kind": 1,
            "Options": ""
        },
        {
            "Key": "show_others_gamebox",
            "Value": "true",
            "Kind": 1,
            "Options": ""
        }
    ],
    "error": 0,
    "msg": "success"
}


app.get('/api/admin/logs', (req, res) => {
    res.json(logData);
});
app.get('/api/admin/rank', (req, res) => {
    res.json(rankData);
});
app.get('/api/admin/panel', (req, res) => {
    res.json(panelData);
});
app.get('/api/admin/configs', (req, res) => {
    res.json(configData);
});
app.put('/api/admin/config', (req, res) => {
    res.json(resData);
});
app.listen(9999, () => {
    console.log('Server is running at http://localhost:9999');
});