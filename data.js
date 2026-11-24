// Hometown Remix tracker data.
// Each game: [date, opponent, home?, result]
//   date: "YYYY-MM-DD"
//   home: true = home game, false = road game
//   result: null (not played yet) or "W 5-2", "L 2-4", "OTL 4-5 OT", "W 4-3 SO", etc.
//     W = win (any), L = regulation loss, OTL = overtime or shootout loss.
// To update after a game: change null to the result string, then bump UPDATED.

const UPDATED = "2026-11-24";

const IMG = id => `https://media.d3.nhle.com/image/private/t_ratio16_9-size20/f_auto/${id}.jpg`;

const TEAMS = [
  { abbr: "ANA", name: "Anaheim Ducks", color: "#00703c", planned: 10,
    img: IMG("v1793718835/prd/t2rpmtlpcpubrji7fam4"),
    blurb: "A 90s throwback in bright Orange County colors.",
    games: [
      ["2026-11-08","PIT",true,"W 5-2"],["2026-11-11","NSH",true,"L 2-4"],
      ["2026-11-27","LAK",true,null],["2026-12-06","WPG",true,null],["2026-12-22","VGK",true,null],
      ["2027-01-08","DAL",true,null],["2027-01-12","NYR",true,null],["2027-02-24","SEA",true,null],
      ["2027-03-05","TBL",true,null],["2027-03-18","UTA",true,null]]},
  { abbr: "BOS", name: "Boston Bruins", color: "#5c4033", planned: 12,
    img: IMG("v1793718858/prd/tgeytpxhgqclbjrax6lb"),
    blurb: "A brown varsity sweater inspired by Boston's college culture.",
    games: [
      ["2026-11-12","MTL",true,"L 2-5"],["2026-11-14","MIN",true,"L 2-6"],
      ["2026-11-27","TOR",true,null],["2026-12-05","DET",true,null],["2026-12-12","NJD",true,null],
      ["2026-12-22","NYI",false,null],["2027-01-06","MTL",false,null],["2027-01-09","DET",false,null],
      ["2027-01-12","CAR",true,null],["2027-01-30","TOR",true,null],["2027-02-15","ANA",true,null],
      ["2027-03-06","PIT",true,null]]},
  { abbr: "BUF", name: "Buffalo Sabres", color: "#003087", planned: 8,
    img: IMG("v1793718877/prd/bck0sy7lkliqnxndymhv"),
    blurb: "Blue and gold for the City of Light.",
    games: [
      ["2026-11-04","OTT",true,"L 1-2"],["2026-11-25","NYR",true,null],["2026-12-18","MTL",true,null],
      ["2026-12-28","DET",true,null],["2027-01-16","NSH",true,null],["2027-01-20","NYI",false,null],
      ["2027-02-26","OTT",true,null],["2027-03-04","STL",true,null]]},
  { abbr: "CGY", name: "Calgary Flames", color: "#c8102e", planned: 9,
    img: IMG("v1793718913/prd/nj2vll9cbbtb41bzmvt8"),
    blurb: "A send-off for the Saddledome in its final season.",
    games: [
      ["2026-11-06","ANA",true,"L 3-5"],["2026-11-08","PHI",true,"W 4-3 OT"],["2026-11-11","NYR",true,"L 1-3"],
      ["2026-12-03","BUF",true,null],["2026-12-05","WSH",true,null],["2026-12-08","NSH",true,null],
      ["2027-01-12","CBJ",true,null],["2027-01-14","SJS",true,null],["2027-01-16","LAK",true,null]]},
  { abbr: "CAR", name: "Carolina Hurricanes", color: "#5f6468", planned: 11,
    img: IMG("v1793718933/prd/tpmrctgdd1a12rh9pj3r"),
    blurb: "Storm gray with oak leaves and the Raleigh skyline.",
    games: [
      ["2026-11-07","CHI",true,"W 9-2"],["2026-11-21","EDM",true,"W 7-4"],["2026-11-28","OTT",true,null],
      ["2026-12-05","TOR",true,null],["2026-12-26","PIT",true,null],["2027-01-02","NSH",true,null],
      ["2027-01-23","ANA",true,null],["2027-01-30","LAK",true,null],["2027-02-13","BUF",true,null],
      ["2027-02-27","TBL",true,null],["2027-03-13","NJD",true,null]]},
  { abbr: "CHI", name: "Chicago Blackhawks", color: "#2e8b3a", planned: 6,
    img: IMG("v1793718957/prd/qs5wh02unvqqhqezmzkf"),
    blurb: "Finally, a green Blackhawks jersey.",
    games: [
      ["2026-11-02","COL",true,"L 2-5"],["2026-12-29","VGK",true,null],["2027-03-08","TBL",true,null],
      ["2027-03-10","WSH",true,null],["2027-03-14","ANA",true,null],["2027-03-16","SJS",true,null]]},
  { abbr: "COL", name: "Colorado Avalanche", color: "#236192", planned: 6,
    img: IMG("v1793718977/prd/n1ndhkrzo086yjhfmcjv"),
    blurb: "Mountain patterns and snowy silver accents.",
    games: [
      ["2026-11-07","DET",true,"W 4-0"],["2026-11-27","MIN",false,null],["2026-11-28","SJS",true,null],
      ["2026-12-12","WSH",true,null],["2027-01-08","SEA",true,null],["2027-02-22","VGK",true,null]]},
  { abbr: "CBJ", name: "Columbus Blue Jackets", color: "#6b6e70", planned: 13,
    note: "1 more date not announced yet.",
    img: IMG("v1793718997/prd/ktiwb7si8fzcy19rfpou"),
    blurb: "Gray, with a cannon crest and a nod to the 5th Line.",
    games: [
      ["2026-11-03","COL",true,"W 7-2"],["2026-11-05","DAL",true,"W 2-1 SO"],["2026-11-10","FLA",true,"L 1-4"],
      ["2026-11-12","TBL",true,"L 1-3"],["2026-11-25","NJD",true,null],["2026-11-27","DET",true,null],
      ["2026-12-10","MIN",true,null],["2026-12-15","CAR",true,null],["2026-12-17","SEA",true,null],
      ["2026-12-22","MTL",true,null],["2026-12-27","EDM",true,null],["2026-12-31","WSH",true,null]]},
  { abbr: "DAL", name: "Dallas Stars", color: "#2bd600", planned: 5,
    img: IMG("v1793719017/prd/bzyqvivwlyek2agpq8qy"),
    blurb: "Neon green and the Dallas skyline at night.",
    games: [
      ["2026-11-25","NSH",true,null],["2026-11-27","STL",false,null],["2026-12-31","NYR",true,null],
      ["2027-01-04","DET",true,null],["2027-01-30","MIN",false,null]]},
  { abbr: "DET", name: "Detroit Red Wings", color: "#ce1126", planned: 8,
    img: IMG("v1793719034/prd/hotqsmo1bpxyvqpxdzpy"),
    blurb: "\"Hockeytown\" across the chest for the first time.",
    games: [
      ["2026-11-05","VGK",true,"L 1-2"],["2026-12-20","TBL",true,null],["2027-01-02","EDM",true,null],
      ["2027-01-04","DAL",false,null],["2027-03-18","CBJ",true,null],["2027-03-24","WSH",true,null],
      ["2027-03-27","NYI",false,null],["2027-03-28","MTL",false,null]]},
  { abbr: "EDM", name: "Edmonton Oilers", color: "#ff4c00", planned: 7,
    img: IMG("v1793719052/prd/ona3asz5ukhi8n2yhyeo"),
    blurb: "Black and orange with oil-industry details.",
    games: [
      ["2026-11-05","ANA",true,"L 4-5"],["2026-12-03","WSH",true,null],["2026-12-17","DAL",true,null],
      ["2027-01-07","FLA",true,null],["2027-01-28","NJD",true,null],["2027-03-11","NSH",true,null],
      ["2027-03-18","STL",true,null]]},
  { abbr: "FLA", name: "Florida Panthers", color: "#ff6f61", planned: 10,
    img: IMG("v1793719068/prd/m5zixlzvqlztuolj14sd"),
    blurb: "A coral sunrise palette, the NHL's first pink.",
    games: [
      ["2026-11-02","DET",true,"L 3-5"],["2026-11-04","CHI",true,"W 5-3"],["2026-11-28","TBL",true,null],
      ["2026-12-19","CGY",true,null],["2026-12-26","TBL",true,null],["2027-01-02","MTL",true,null],
      ["2027-01-16","VGK",true,null],["2027-02-13","DAL",true,null],["2027-03-06","TOR",true,null],
      ["2027-03-27","PHI",true,null]]},
  { abbr: "LAK", name: "Los Angeles Kings", color: "#6a2c91", planned: 7,
    img: IMG("v1793719093/prd/h0kafo5pvmwchxsaknpg"),
    blurb: "Purple, palm trees and Hollywood lettering.",
    games: [
      ["2026-11-04","SJS",true,"W 7-2"],["2026-12-09","SJS",true,null],["2026-12-30","TOR",true,null],
      ["2027-01-06","WSH",true,null],["2027-01-13","STL",true,null],["2027-03-03","TBL",true,null],
      ["2027-03-31","WPG",true,null]]},
  { abbr: "MIN", name: "Minnesota Wild", color: "#154734", planned: 10,
    img: IMG("v1793719116/prd/dw6ytifr32xcjn64iwlv"),
    blurb: "Black with a crescent moon and northern stars.",
    games: [
      ["2026-11-17","NSH",true,"W 7-3"],["2026-11-27","COL",true,null],["2026-12-10","CBJ",false,null],
      ["2026-12-12","WPG",true,null],["2026-12-26","WPG",true,null],["2027-01-02","STL",true,null],
      ["2027-01-14","FLA",true,null],["2027-01-21","DET",true,null],["2027-02-23","PIT",true,null],
      ["2027-03-19","CGY",true,null]]},
  { abbr: "MTL", name: "Montreal Canadiens", color: "#af1e2d", planned: 10,
    img: IMG("v1793719134/prd/u4vxb2gbm4ztvfengygx"),
    blurb: "A white tribute to Montreal's history and architecture.",
    games: [
      ["2026-11-03","WPG",true,"OTL 4-5 OT"],["2026-11-07","TOR",false,"W 4-2"],["2026-11-12","BOS",false,"W 5-2"],
      ["2026-11-14","COL",true,"L 1-4"],["2026-11-23","LAK",true,"L 1-2"],["2026-12-08","VGK",true,null],
      ["2026-12-27","DAL",true,null],["2027-01-06","BOS",true,null],["2027-01-23","CGY",true,null],
      ["2027-03-28","DET",true,null]]},
  { abbr: "NSH", name: "Nashville Predators", color: "#041e42", planned: 10,
    img: IMG("v1793719154/prd/jtdye0qa45aa2ry7dcig"),
    blurb: "Country-stage style for Smashville.",
    games: [
      ["2026-11-07","STL",true,"W 3-1"],["2026-11-21","PIT",true,"W 4-3"],["2026-11-25","DAL",false,null],
      ["2026-12-05","CBJ",true,null],["2026-12-26","DET",true,null],["2027-01-23","LAK",true,null],
      ["2027-02-13","ANA",true,null],["2027-02-27","LAK",true,null],["2027-03-06","MIN",true,null],
      ["2027-03-20","BOS",true,null]]},
  { abbr: "NJD", name: "New Jersey Devils", color: "#111111", planned: 10,
    img: IMG("v1793719172/prd/u9egtidecsrlqed1jd1y"),
    blurb: "Black and red with a standalone NJ crest.",
    games: [
      ["2026-11-18","MTL",true,"L 2-3"],["2026-11-27","CGY",true,null],["2026-11-28","WPG",true,null],
      ["2026-12-15","NYR",true,null],["2026-12-17","TOR",true,null],["2027-01-16","NYI",true,null],
      ["2027-01-19","DAL",true,null],["2027-02-23","CAR",true,null],["2027-03-23","PHI",true,null],
      ["2027-03-29","CAR",true,null]]},
  { abbr: "NYI", name: "New York Islanders", color: "#00539b", planned: 11,
    img: IMG("v1793719192/prd/uue5gookomnn8ltvqclb"),
    blurb: "The Fisherman returns, with lighthouses and waves.",
    games: [
      ["2026-11-05","CAR",true,"L 3-5"],["2026-11-25","STL",true,null],["2026-12-20","NYR",true,null],
      ["2026-12-22","BOS",true,null],["2026-12-27","OTT",true,null],["2027-01-13","PIT",true,null],
      ["2027-01-20","BUF",true,null],["2027-02-26","PHI",true,null],["2027-03-09","MTL",true,null],
      ["2027-03-20","PHI",true,null],["2027-04-01","PIT",false,null]]},
  { abbr: "NYR", name: "New York Rangers", color: "#0038a8", planned: 5,
    img: IMG("v1793719215/prd/bpwnjnlonhdsvnc7uffw"),
    blurb: "Lady Liberty and a silver skyline.",
    games: [
      ["2026-11-05","PHI",true,"W 3-2"],["2026-11-30","CAR",true,null],["2026-12-22","NJD",true,null],
      ["2027-02-12","NYI",true,null],["2027-03-21","WSH",true,null]]},
  { abbr: "OTT", name: "Ottawa Senators", color: "#b79257", planned: 9,
    note: "Ottawa has only announced its debut so far. The other 8 dates aren't public yet.",
    img: IMG("v1793719244/prd/jpodkj3pwlaalkaal7xb"),
    blurb: "Black and gold with Gothic Parliament details.",
    games: [["2026-11-12","COL",true,"W 4-3 OT"]]},
  { abbr: "PHI", name: "Philadelphia Flyers", color: "#f74902", planned: 13,
    img: IMG("v1793719270/prd/h8m3kwqozghijlvosa7e"),
    blurb: "Liberty Bell gray, crack and all.",
    games: [
      ["2026-11-03","MIN",true,"L 2-4"],["2026-11-27","VAN",true,null],["2026-11-30","TOR",false,null],
      ["2026-12-03","NYI",true,null],["2026-12-14","FLA",true,null],["2026-12-18","DET",true,null],
      ["2027-01-10","CHI",true,null],["2027-01-23","NJD",true,null],["2027-02-20","NYR",true,null],
      ["2027-02-26","NYI",false,null],["2027-03-07","STL",true,null],["2027-03-18","BOS",true,null],
      ["2027-03-20","NYI",false,null]]},
  { abbr: "PIT", name: "Pittsburgh Penguins", color: "#fcb514", planned: 10,
    img: IMG("v1793719291/prd/agmwerswybeair5qxwae"),
    blurb: "1960s pop art, Pittsburgh style.",
    games: [
      ["2026-11-03","VGK",true,"L 2-3"],["2026-11-28","TOR",true,null],["2026-12-06","SJS",true,null],
      ["2026-12-18","SEA",true,null],["2027-01-21","ANA",true,null],["2027-02-02","TBL",true,null],
      ["2027-03-09","OTT",true,null],["2027-03-25","NJD",true,null],["2027-03-30","PHI",false,null],
      ["2027-04-01","NYI",true,null]]},
  { abbr: "SJS", name: "San Jose Sharks", color: "#006d75", planned: 8,
    img: IMG("v1793719317/prd/wbwzhsomjtidu8yourgb"),
    blurb: "Scuba blue with shark-tooth stripes.",
    games: [
      ["2026-11-02","CGY",true,"L 1-2"],["2026-11-15","NSH",true,"W 4-2"],["2026-11-21","SEA",true,"W 4-3"],
      ["2026-12-08","SEA",true,null],["2026-12-14","VAN",true,null],["2027-01-02","TOR",true,null],
      ["2027-02-13","DET",true,null],["2027-03-20","CAR",true,null]]},
  { abbr: "SEA", name: "Seattle Kraken", color: "#001628", planned: 6,
    img: IMG("v1793719335/prd/rvln3ze1xvy5eaxdts00"),
    blurb: "The anchor finally takes the crest.",
    games: [
      ["2026-11-04","CGY",true,"W 2-1 OT"],["2026-11-28","EDM",true,null],["2027-01-02","NYI",true,null],
      ["2027-01-03","VAN",true,null],["2027-02-13","STL",true,null],["2027-03-15","STL",true,null]]},
  { abbr: "STL", name: "St. Louis Blues", color: "#002f87", planned: 10,
    img: IMG("v1793719354/prd/obaemq9ggqgjriosqdf3"),
    blurb: "Black, inspired by the Mississippi and the Arch.",
    games: [
      ["2026-11-17","ANA",true,"W 8-6"],["2026-11-22","EDM",true,"W 5-4 SO"],["2026-11-25","NYI",false,null],
      ["2026-11-27","DAL",true,null],["2026-12-02","PIT",true,null],["2026-12-13","TBL",true,null],
      ["2027-01-26","CHI",true,null],["2027-01-30","VAN",true,null],["2027-02-25","VAN",true,null],
      ["2027-03-13","ANA",true,null]]},
  { abbr: "TBL", name: "Tampa Bay Lightning", color: "#1a1a1a", planned: 10,
    note: "Worn at every Saturday home game.",
    img: IMG("v1793719384/prd/ygshhkub5i8dslbxhtff"),
    blurb: "Black and sky blue with a Bayshore hem.",
    games: [
      ["2026-11-14","DET",true,"L 0-2"],["2026-12-12","PIT",true,null],["2027-01-02","BUF",true,null],
      ["2027-01-16","OTT",true,null],["2027-01-30","NYI",true,null],["2027-02-13","COL",true,null],
      ["2027-02-20","TOR",true,null],["2027-03-13","NYI",true,null],["2027-03-27","NYR",true,null],
      ["2027-04-10","BOS",true,null]]},
  { abbr: "TOR", name: "Toronto Maple Leafs", color: "#00205b", planned: 5,
    img: IMG("v1793719403/prd/puz7sdq8sufyehg7pkzc"),
    blurb: "A cream centennial look with a remixed leaf.",
    games: [
      ["2026-11-08","NJD",true,"L 0-4"],["2026-11-19","LAK",true,"OTL 3-4 SO"],["2026-11-30","PHI",true,null],
      ["2026-12-19","TBL",true,null],["2027-02-16","CAR",true,null]]},
  { abbr: "UTA", name: "Utah Mammoth", color: "#6cace4", planned: 5,
    img: IMG("v1793719422/prd/jnfxyeaarkbfamaspsqf"),
    blurb: "Mountain blue with a Wasatch hem.",
    games: [
      ["2026-11-05","MTL",false,"OTL 4-5 OT"],["2026-11-12","STL",true,"OTL 0-1 SO"],["2026-12-02","WPG",true,null],
      ["2027-02-12","CGY",true,null],["2027-03-13","PHI",true,null]]},
  { abbr: "VAN", name: "Vancouver Canucks", color: "#00205b", planned: 6,
    img: IMG("v1793719442/prd/q97poc0d4olc6r5dhfhw"),
    blurb: "Vancouver at night, with a deep-blue orca.",
    games: [
      ["2026-11-13","NYR",true,"L 1-5"],["2026-11-21","MIN",true,"W 4-3 SO"],["2026-12-04","BUF",true,null],
      ["2027-02-16","PIT",true,null],["2027-02-20","COL",true,null],["2027-03-03","CHI",true,null]]},
  { abbr: "VGK", name: "Vegas Golden Knights", color: "#00a36c", planned: 5,
    img: IMG("v1793719463/prd/yxqgqsxfxxkvhrv844u5"),
    blurb: "Casino jade felt and card suits.",
    games: [
      ["2026-11-15","VAN",true,"L 3-6"],["2026-12-21","CAR",true,null],["2027-01-28","BUF",true,null],
      ["2027-02-18","CBJ",true,null],["2027-03-15","WPG",true,null]]},
  { abbr: "WSH", name: "Washington Capitals", color: "#041e42", planned: 11,
    img: IMG("v1793719484/prd/i3m9tnd9grwvx5plttor"),
    blurb: "The Capitol Dome, marble and cherry blossoms.",
    games: [
      ["2026-11-07","FLA",true,"W 4-3"],["2026-11-25","PHI",true,null],["2026-12-01","VAN",true,null],
      ["2026-12-28","EDM",true,null],["2027-01-12","VGK",true,null],["2027-01-14","CAR",true,null],
      ["2027-02-02","WPG",true,null],["2027-02-23","NYR",true,null],["2027-03-03","CAR",true,null],
      ["2027-03-15","TBL",true,null],["2027-03-23","DET",true,null]]},
  { abbr: "WPG", name: "Winnipeg Jets", color: "#041e42", planned: 8,
    img: IMG("v1793719502/prd/qdrxgpwjcsasrjbiz4hp"),
    blurb: "Northern lights across the sleeves.",
    games: [
      ["2026-11-17","OTT",true,"L 1-2"],["2026-11-21","VGK",true,"OTL 4-5 SO"],["2026-11-23","UTA",true,"W 4-2"],
      ["2026-12-10","CHI",true,null],["2027-01-19","MIN",true,null],["2027-01-21","NYR",true,null],
      ["2027-03-23","SEA",true,null],["2027-03-25","COL",true,null]]},
];

// Each team's full-season record (all jerseys), from the NHL standings.
// [wins, regulation losses, OT/shootout losses]. Must cover the same games as the results above.
// The page subtracts the Remix record to get the record in every other jersey.
const SEASON_ASOF = "2026-11-22";
const SEASON = {
  ANA:[11,12,1], BOS:[15,7,1], BUF:[10,10,4], CGY:[10,12,2], CAR:[18,3,3], CHI:[8,14,2],
  COL:[13,7,3], CBJ:[9,12,0], DAL:[15,6,2], DET:[8,12,3], EDM:[17,5,4], FLA:[13,8,3],
  LAK:[7,12,2], MIN:[17,3,5], MTL:[14,6,4], NSH:[12,6,5], NJD:[15,8,0], NYI:[11,6,5],
  NYR:[13,9,1], OTT:[15,6,3], PHI:[9,11,6], PIT:[7,14,2], SJS:[11,12,2], SEA:[10,9,1],
  STL:[13,9,2], TBL:[15,6,2], TOR:[8,14,3], UTA:[12,9,3], VAN:[6,19,1], VGK:[14,6,5],
  WSH:[10,11,0], WPG:[11,9,4],
};
