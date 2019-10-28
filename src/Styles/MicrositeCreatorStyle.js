export default MicrositeCreatorStyles => ({
    dropZone:{
        fontSize: 30,
        height: 120,
        minHeight: 0,
        margin: 10,
        maxWidth: 250,
        '& p':{
            fontSize:16
        },
        display:"inline-block"
    },
    fieldWrapper:{
        padding:10
    },
    fieldTitle:{
        fontWeight:"700", 
        fontSize:"1rem"
    },
    fontExample:{
        padding:15
    },
    formElement:{
        padding:"15px 0px"
    },
    formInput:{
        maxWidth: 500
    },
    formWrapper:{
        minHeight:400,
        display:"flex",
        justifyContent:"space-between",
        flexDirection : "column",
        padding:30
    },
    GridWrap:{
        padding:35
    },
    ImgWrapper:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    LoadWrapper:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        margin:"0 auto"
    },
    MsCreatorWrapper:{
        height: "calc(100vh - 180px)",
        display: "flex",
        alignItems: "center"
    },
    NavBtnWrap:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:'20px 0px'
    },
    PageTitle:{
        paddingLeft:30
    },
    stepTitle:{
        fontSize:'1.4rem',
        fontWeight:'bold'
    },
    SummaryField:{
        minWidth:250,
        '& span':{
            fontWeight:"bold"
        },
    }

  })