const teamMembers = [
  {
    id: 1,
    name: "Shivani Arora",
    team: "technical",
    title: "Team Lead",
    instagram: "https://www.instagram.com/Shivani29.__/",
    linkedin: "https://www.linkedin.com/in/shivani-arora29",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgO3YB5Ww5GcqWAXHQ6AkcJLBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_oTf8VXa3F.uTwNI08VHXr6H.Y5A66z6ePJJgi_rDtIjjC9QQEKuLMIX8JyMYxMFuzm9pfTzXqRRKmtc13tindiFd4t9NyXXcJSnSPJE6Kto0dAhFUVeQPnAEux0wjA6sY-",
  },
  {
    id: 2,
    name: "Akshay Kumar Pandey",
    team: "technical",
    title: "Co-Lead",
    instagram: "https://www.instagram.com/kuchbhiakshay/",
    linkedin: "https://www.linkedin.com/in/akshay-kumar-pandey/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgN.OhJchFmLyQxH.PM4ZIIrBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rOZ.DA.p7SqfVtNnymSkEKd_V7lR39GsXPMGe1R6_iTdNV7o.VGrfpYI2jBgdSnh3m9pfTzXqRRKmtc13tindiQ3qWUTtakms8RUkEnZAHTgAcNR9gDdKqVrqG2JSKXjU-",
  },
  {
    id: 3,
    name: "Devarsh Shah",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/devarshh_08/",
    linkedin:
      "https://www.linkedin.com/in/devarshshahh08/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=hGKc_mSlimsN04H87z2Z6_oE8T2LeusMKf4jS3uHThtnhRCl65oCApD4Gb0JFCKeia.cjI5Bl1fOmUzU9KobuiDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 4,
    name: "Diksha Sinha",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/dixpresss/",
    linkedin: "https://www.linkedin.com/in/diksha-sinha-46b786217/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgO31PX4LUGaWv6cOTkJLlZyBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rFs4KN3rTC_uiPrwUlSl6cCbWLrgqHISOskY6ajY68.9kjDkXVwv3FeFlh0wwyVWfm9pfTzXqRRKmtc13tindi8PY9wICzw1hxsZQ9mOk2eN3YZ1hBH.ld1sbMd96lrnY-",
  },
  {
    id: 5,
    name: "Mehul Singh",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/_me._.si_/",
    linkedin:
      "https://www.linkedin.com/in/mehul-singh-73154b251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=W9onTzA34ohqymmeU4PLVU5paRzJzAWZA6kwE7dSaZk9iDVbp_.iBXXf_cpnuOj6_7fKwlMBowJa7cgEZnK0_yDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 6,
    name: "Parth Dudani",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/Parth_dudani/",
    linkedin:
      "https://www.linkedin.com/in/parth-dudani-97b594250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgM.X5m..dFG0xcGQsVprbhFBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_q_1f2LYTvvVDWaua5iTd_qCylYJm2zG7fBcQRDCH2iK5NKUp6hYt1IP7_WRcuSE4fm9pfTzXqRRKmtc13tindifHuEcortgdoyxFsB.Umo7t3YZ1hBH.ld1sbMd96lrnY-",
  },
  {
    id: 7,
    name: "Sawari Jamgaonkar",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/Sawari_jamgaonkar/",
    linkedin: "www.linkedin.com/in/sawari-jamgaonkar-293399250",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMr9MZ7wlIaS3wjh3gkJRZeBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qnyZWgKp8i6ywFwGA1815oJAWJRMsLFII5DKh7JjHivIQUiXV.W6gBz_ZB9A9cezHm9pfTzXqRRKmtc13tindiVdSIjYtT9EpjnGcCfuKhgi6WwO.QRwPLzSeeoEbUbS8-",
  },
  {
    id: 8,
    name: "Tanishq Jain",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/tanishq0_0/",
    linkedin: "https://www.linkedin.com/in/tanishq-jain-823427226/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgNCvlhEoZQgfBQhWaRjsvmNBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rOZ.DA.p7SqfVtNnymSkEKb.m7rzOMMO6qH.YEOMOmtTD9VSUIkNloNKUOHRaY.bTm9pfTzXqRRKmtc13tindifS.E36gojvCx.BgSmDX_.5Ukz1mvpNrCwoaK4QnzDhs-",
  },
  {
    id: 9,
    name: "Utkarsh Uttam",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/utkarshuttam3/",
    linkedin: "https://www.linkedin.com/in/utkarsh-uttam-0884ab1b7/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=mAj6vJjfMhKebXXMJiqMf_fMfvVHl.eDcJ8s7iRp_pKv.6ey7AkdakAQZC3yc_JljM8Q6kmCpae8YxgaLIbUUiDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 10,
    name: "Vinayak Pandey",
    team: "technical",
    title: "Core Member",
    instagram: "https://www.instagram.com/VintellX/",
    linkedin: "https://in.linkedin.com/in/vintellx",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=sPtaTk_bKO2s7lBz4cCLuE4ZqND81Egx0nrls3tjGx5s9pQUz8KcVwIxdZ4u6BKhY2tXACMPzGH_nuHoV10LKCDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 11,
    name: "Arushi Saxena",
    team: "social-media",
    title: "Team Lead",
    instagram: "https://www.instagram.com/arrushhii/",
    linkedin: "https://www.linkedin.com/in/arushi-saxena-5104b0266/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgNhx3Dm0hVMp0LTJkY3tIuNBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rteIvM56pNaYBj5zuXYQTc2GGRW2BQS.cXeOPJXuji8a8GfcCOHu4833S.FiDbsTTm9pfTzXqRRKmtc13tindiwJGIq9xiOK3ZiG8dAfLkZpUkz1mvpNrCwoaK4QnzDhs-",
  },
  {
    id: 12,
    name: "Suraj Raghuvanshi",
    team: "social-media",
    title: "Co-Lead",
    instagram: "https://www.instagram.com/surajraghuvanshiiii_/",
    linkedin: "https://www.linkedin.com/in/suraj-raghuvanshi-0b550821a/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=mAj6vJjfMhKebXXMJiqMfzZE94x0LJLPqFKdngaMQJXD6MZhR8FnICs.0VQiBlMDozKB5nWyZ_qU4ncZN6CtuiDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 13,
    name: "Arnav Karn",
    team: "social-media",
    title: "Core Member",
    instagram: "https://www.instagram.com/arnav_065/",
    linkedin: "https://in.linkedin.com/in/arnavkarn",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=h9unWI1QEML3pIdHbTKHnOoHhuNaWKV3QFGtCCBs8tLFhYwvrKSe0Aq_euL4.qsmuA37IPWY_gE3KjfpF0VVmiDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 14,
    name: "Disha Gupta",
    team: "social-media",
    title: "Core Member",
    instagram: "https://www.instagram.com/dishaha.g/",
    linkedin:
      "https://www.linkedin.com/in/disha-gupta-430174245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMfUmsh5sb0v9BlJCVCgUBvBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rteIvM56pNaYBj5zuXYQTcutcf5r3VZXo0BphvBYYywFNzfB6MzfDIxPQbP6zKXpTm9pfTzXqRRKmtc13tindi0eGqrn4JkQIgMNPIlpzMZ85b7U20NtdVO.TJdzM2u9A-",
  },
  {
    id: 15,
    name: "Kanishk Mathur",
    team: "pr-outreach",
    title: "Team Lead",
    instagram: "https://www.instagram.com/Wthkanishk/",
    linkedin: "https://www.linkedin.com/in/kanishk-mathur-9b54a0220/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgNhCnutOZ3FwUlbboV8nO36BQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qn.khePqndUvcOBc2v4BNGAbZ8xy7Etx9aa_4GRN75_D.ovsBvb8Gv6xhMwCFhawTm9pfTzXqRRKmtc13tindieqloYjr2rfuknDIsWIVc3P76VufFkytzIgsl7ithHiY-",
  },
  {
    id: 16,
    name: "Eashan Batra",
    team: "pr-outreach",
    title: "Co-Lead",
    instagram: "https://www.instagram.com/eashaaaan/",
    linkedin:
      "https://www.linkedin.com/in/eashan-batra-bb6949221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=l1X4kCIG5m81gvc4CiklH3rME9AITHvI6upLgdlfhKKj3bFy16eQrvmtsUKOphqtWTipGFyNOAzAwCiYQPh6lCDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6qpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 17,
    name: "Ronith Dhanesh",
    team: "pr-outreach",
    title: "Core Member",
    instagram: "https://www.instagram.com/roniithh/",
    linkedin:
      "https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=4VJhCBN_mU6A7jiaDetAStWjH8kGqADlPWdoD33QDV7pTaotcBTXLER2xP3SLVRAkQbJiVLnHdkvnjOzO9txmCDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6qpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 18,
    name: "Supriya Mishra",
    team: "pr-outreach",
    title: "Core Member",
    instagram: "https://www.instagram.com/its_supriya_mishra/",
    linkedin: "https://www.linkedin.com/in/supriya-mishra-a32b4b251",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgN2xIQ0eVJokQVtrg1eeLqQBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_pAgIGbPHonffKFOJMqK52ill18r2VWnqW_SKfl09xJLs4V0dPQmJJzab33zJA2O3fm9pfTzXqRRKmtc13tindiK_qKO_UKlBIlZfW.H8ORPeC9MAe82cSJCP1N6_yi6io-",
  },
  {
    id: 19,
    name: "Vatsal Baranwal",
    team: "pr-outreach",
    title: "Core Member",
    instagram: "https://www.instagram.com/baranwal_vatsal/",
    linkedin:
      "https://www.linkedin.com/in/vatsal-baranwal-3607a1251/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgOILTXw7yvq1djBCoWAyB_gBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rYhOjTd6zlCc5HssG62UxA.cf3SXXHP9KzQxuDnWv3CWiFhak3OsryThcbvxIRaoTm9pfTzXqRRKmtc13tindiU43nQfvhtjNjz0t5ihuXbjWSHExrUqSV0D9fFFSYzf0-",
  },
  {
    id: 20,
    name: "Vikas Shukla",
    team: "pr-outreach",
    title: "Core Member",
    instagram: "https://www.instagram.com/01shuklavikas/",
    linkedin: "https://www.linkedin.com/in/vikas-shuklag/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgNAuwB3fL7YzugF.OXW3VfQBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qmXqJj5qHYmYPXU8SlPubTQ.Nv0zjPSRtPXgcv6zGXmx6a.IgWny4GJ4BPchHY0y7m9pfTzXqRRKmtc13tindiFIg1CF19SmP3HKt4wI67Tt3YZ1hBH.ld1sbMd96lrnY-",
  },

  {
    id: 21,
    name: "Dr. Subhash Patel",
    team: "other",
    title: "Faculty Coordinator",
    instagram: "#",
    linkedin:
      "https://www.linkedin.com/in/subhash-chandra-patel-638b2233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgOSr_RYELHrRNoGIfFEr_ilBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_pCH.lZb0ioOklPJ5Bix4x1_4NOhcaLgJdQ5yJ8H8lO7SAH7nnrjnKjiOFfEAEKtSHm9pfTzXqRRKmtc13tindiPKhKqEWVzM99WhGAopIXp9e02N1Sjgf4MOMoWph2HHI-",
  },
  {
    id: 22,
    name: "Ayush Thakur",
    team: "other",
    title: "President",
    instagram: "https://www.instagram.com/ayuzhthakur/",
    linkedin:
      "https://www.linkedin.com/in/ayush-thakur-1b1127221/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgNSua8LmV3Ggjor_JBOGJRzBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qaZSEICXmAUcxpsPH_qRJAZv0HodF9WL3EkNP2Mb0bSyuNQvFOuAsX.q9G2rvuy1Lm9pfTzXqRRKmtc13tindiR0UvQcKP1amARZFKSPaV.d3YZ1hBH.ld1sbMd96lrnY-",
  },
  {
    id: 23,
    name: "Gourang Agarwal",
    team: "other",
    title: "Advisor",
    instagram: "https://www.instagram.com/gourangagrawal_/",
    linkedin: "https://www.linkedin.com/in/gourang-agrawal/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMPYZ1TSZIZwZX2w1Q6Gxs0BQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_r.25yV5AYYPdG_7E4ktkRcwzk_sNc0y3Dgh_0lx6C2TiaVzXXsBQjoMetl5tSWYQDm9pfTzXqRRKmtc13tindiB792xTNExqoZAnsPHHXPK93YZ1hBH.ld1sbMd96lrnY-",
  },
  {
    id: 24,
    name: "Sanket Laxman Patil",
    team: "other",
    title: "Advisor",
    instagram: "https://instagram.com/sanket.patil____?igshid=NGVhN2U2NjQ0Yg==",
    linkedin: "https://www.linkedin.com/in/sanket-patil-483b12221/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=ikCbX5MLLV0B6e_iXfsCS0t32wXpwJqYAOMX7SfjbLqHVgzfAIvxyh1RgKJcv4up_ODOBTPlHSzf41gan2lQAyDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 25,
    name: "Atul Joshy",
    team: "media",
    title: "Team Lead",
    instagram: "https://www.instagram.com/atuljoshy/",
    linkedin: "https://www.linkedin.com/in/atuljoshy/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgPAfUpyDUFid9VQpU15kkysBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rlsDRlDsAERhbeS2K2cczIbzx7Ga5GAGT4mmcYkp9clI32K7UO1ouh.riF9oOtESLm9pfTzXqRRKmtc13tindihpBLPH1QvRL60ZJf8zKO7M5b7U20NtdVO.TJdzM2u9A-",
  },
  {
    id: 26,
    name: "Adhithya Raj P R",
    team: "media",
    title: "Co-Lead",
    instagram: "https://www.instagram.com/aaa.dhhi/",
    linkedin: "http://linkedin.com/in/adhithyapr03",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgOD.jrSd2KcA80xJcoRShd5BQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_rXfoBs8Tg2HIFUVAzgHceovd9HDGRECKDNiH8rqM5Dt4RCBk2dxmIDNd5IvpboY6Pm9pfTzXqRRKmtc13tindis62PKqAuaqdGJ42HfA1drt3YZ1hBH.ld1sbMd96lrnY-",
  },
  {
    id: 27,
    name: "Amandeep Singh Khalsa",
    team: "media",
    title: "Core Member",
    instagram: "https://www.instagram.com/_amandeep.singh/",
    linkedin:
      "https://www.linkedin.com/in/amandeep-singh-khalsa-61173a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=1.QmHE1IS8jQYgeZEfEACXjZftOA8RZWuhPeFtHiIYz5twE83fko1ti1cFRDFDl5qgPAnmX5fAL_StKWMJT2HSDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 28,
    name: "Kumarvaishnav",
    team: "media",
    title: "Core Member",
    instagram: "https://www.instagram.com/lmaokv._/",
    linkedin: "https://in.linkedin.com/in/kumarvaishnav-dwivedi-926478216",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=sg0YblRzBvL8IsVVOnSlxHpV9vaqq_rowMUOFzYQcCMrCuCHaZcLlLK_yymDsWTtIH6VhcB4fMGusIjGe814PCDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 29,
    name: "Sidharth Sonu Kumar",
    team: "media",
    title: "Core Member",
    instagram:
      "https://instagram.com/sidhyyuu?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
    linkedin: "https://www.linkedin.com/in/sidharth-kumar-18b905282",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMSQsxBBh7Ren1iH9q7jzdSBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_q79WmQbDh5yGubWZ_tsHhlSqAN631O2UAhqJW76ELiLtAXzd28quaDw.Con2mN7yPm9pfTzXqRRKmtc13tindiBD0_XB6uhXB8LcQCWg6tLLF8FJBDYl55jVxj2elL_Vw-",
  },
  {
    id: 30,
    name: "Shantanu Modhave",
    team: "event",
    title: "Team Lead",
    instagram: "https://www.instagram.com/shantanu.modhave/",
    linkedin:
      "https://www.linkedin.com/in/shantanu-modhave-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=ikCbX5MLLV0B6e_iXfsCS0t32wXpwJqYAOMX7SfjbLqHVgzfAIvxyh1RgKJcv4up_ODOBTPlHSzf41gan2lQAyDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 31,
    name: "Ashmit Pandey",
    team: "event",
    title: "Co-Lead",
    instagram: "https://www.instagram.com/ashmit.pandey.03/",
    linkedin: "https://www.linkedin.com/in/ashmit-pandey-438760228",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMIPPkVl7Bd2hzQoAaHDTMCBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qc2R2Z6jXZXbVY_N55Ncma7eI2jSGsJ4b5PVaTbO6uQobKy.7iUL9pexLfpJNEnjPm9pfTzXqRRKmtc13tindi7FL7nswrxv7vxb2BwMLLlpUkz1mvpNrCwoaK4QnzDhs-",
  },
  {
    id: 32,
    name: "Abhishek Bhavsar",
    team: "event",
    title: "Core Member",
    instagram: "https://www.instagram.com/kuchbhiabhi_/",
    linkedin: "https://www.linkedin.com/in/abhishek-bhavsar-529b75222",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=1.QmHE1IS8jQYgeZEfEACSirEnUydzlbuXEWSRKECrReubri7z6SmzP5nHPPiIZRV367Ii1dHKG3rMVrJ7t1vSDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 33,
    name: "Gayatri Mistary",
    team: "event",
    title: "Core Member",
    instagram: "https://www.instagram.com/gayatrigawle_/",
    linkedin:
      "https://www.linkedin.com/in/gayatri-mistary-b53693224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgN8AH02qGn60sIegcRzoul2BQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qlcYzpn8tHTSMLFEVn82cFulaotju9hNIKdVCBwW7QY9HwsfsOx9zCcuBBGW.Be9_m9pfTzXqRRKmtc13tindiSkfaHM1n0BsAtnbOvrtXDSsVolvlJDGcg8oc_pCmaKE-",
  },
  {
    id: 34,
    name: "Pranav Sanjay Jahagirdar",
    team: "event",
    title: "Core Member",
    instagram: "https://www.instagram.com/pranavjahagirdar_/",
    linkedin:
      "https://www.linkedin.com/in/pranav-sanjay-jahagirdar-531635251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    imgSrc:
      "https://convert.icedrive.io/?p=NpKR9xVTAIGUjHm1gjbxuMqiTSYqmOnIKwAi9ESjcoimLlU.Mi6jKjBmlzDMzPQluerpB6M9dJz7MmQE2IIO4xR0A326JcUDejj2oWwSaRzaQejXrVx_CM1CluVQCsQYwWRz36ZYvRALNUGPQIUqDHqLQ_aD_b1H0Scev..jRzPTKtVW_mVLt_Un3QbwK_Npg",
  },
  {
    id: 35,
    name: "Tushita Gakkhar",
    team: "event",
    title: "Core Member",
    instagram: "https://www.instagram.com/tushita_gakkhar/",
    linkedin:
      "https://www.linkedin.com/in/tushita-gakkhar-080942251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=sPtaTk_bKO2s7lBz4cCLuMgif2G8URgKSPk83Ss3ocQbW1RFr8GUpdOAHn3UeTAzmJKUdDdMH7zwp8BkDIikbiDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 36,
    name: "Vivek Kaushik",
    team: "event",
    title: "Core Member",
    instagram: "https://www.instagram/kaushik.vivek/",
    linkedin:
      "https://www.linkedin.com/in/vivek-kaushik-766723250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=U997Jpu42aXA73SXXqTHotmihavJsARyQBtE8BfJpa3i.BpawMmM4AVxtkURzsFY.3_2pu6PwqyQVJmboIAzdSDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 37,
    name: "Aarushi Verma",
    team: "design",
    title: "Team Lead",
    instagram: "https://www.instagram.com/ayerushii/",
    linkedin: "https://www.linkedin.com/in/aarushi-verma-a72ba4226/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMyMDbmHwn46K4HczbzBYIBBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_ojHmowQElekEZrw60xEp71N6mS8uijyPqLPJN5CDoOKTQNondic17R9lUR1lUpPNnm9pfTzXqRRKmtc13tindi67_8wbPs4jhvwayw_7vXGJUkz1mvpNrCwoaK4QnzDhs-",
  },
  {
    id: 38,
    name: "Ayushka Behere",
    team: "design",
    title: "Co-Lead",
    instagram: "https://www.instagram.com/ayushka_b/",
    linkedin:
      "https://www.linkedin.com/in/ayushka-behere-209946227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgNlOMPZFMAOl5D4izORl2IgBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_pGVCgeLWScYiqCLyH4Tode6tmGenGmNIazMEBfaNuw0bc3xwbSNAq0NTqLDnWGgsHm9pfTzXqRRKmtc13tindicC29HP1cZn_eWAsfc4NooflwMHHdRznFvAYOL6O8fVY-",
  },
  {
    id: 39,
    name: "Harshit Gujar",
    team: "design",
    title: "Core Member",
    instagram: "https://www.instagram.com/harshitgujar__16/",
    linkedin:
      "https://www.linkedin.com/in/harshit-gujar-8b8627297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=PzV6nOxX0OMI7WkNdxUIbBSHbIt6ZMm4F.hrX6bRMxfd9yVSe8ZzKkNUaYn6LI5Q.szRG4gupB43kf8qrP50.SDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZFqpZcyU0JY5XQBgF03w_KrQ--&w=1024&h=1024&m=cropped",
  },
  {
    id: 40,
    name: "Maher Sarah Jafri",
    team: "design",
    title: "Core Member",
    instagram: "https://www.instagram.com/maher.sarahh/",
    linkedin:
      "https://www.linkedin.com/in/mahersarahjafri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=W9onTzA34ohqymmeU4PLVZW4xIYh8p9ZFUeUtjLUCYbWT1Ty4feQ8UnyIKuR9va6J6bTlK8qVLRNnbV.YbFPESDlyLGz8uHpUKktTHrYuxBZyZT.lTgxFPeJFF5A8L6OFhEcK3v_adyoCDVD_9h.4A--&w=1024&h=1024&m=cropped",
  },
  {
    id: 41,
    name: "Riya Verma",
    team: "design",
    title: "Core Member",
    instagram: "https://www.instagram.com/beeriyal/",
    linkedin: "https://www.linkedin.com/in/riya-verma-41558724",
    team: "design",
    title: "Core Member",
    instagram: "https://www.instagram.com/beeriyal/",
    linkedin:
      "https://www.linkedin.com/in/riya-verma-41558724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgMX61h8nMlpWvYuapqk.LTdBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qmXqJj5qHYmYPXU8SlPubTH9yhfzD5FxW1jYvkpWc0AsOhgN2RJJgix5gXuYSF0Bvm9pfTzXqRRKmtc13tindi2_tW_Y93ucNMrLVW4rDSVg--",
  },
  {
    id: 42,
    name: "Shreeja Pandey",
    team: "content",
    title: "Team Lead",
    instagram: "https://www.instagram.com/Shreexxaa/",
    linkedin: "https://www.linkedin.com/in/shreeja-pandey-6b0874252/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/thumbnail?p=vLiVxu3OF0YTU414O7mf8gGbqEBbII8OeoZxz1fW5gMW.8KBnp5qC47LydOo3Xn6XfL3A9TmZ3svzPxPRecM7CDlyLGz8uHpUKktTHrYuxBZyZT.lTgxFPeJFF5A8L6OFhEcK3v_adyoCDVD_9h.4A--&w=1024&h=1024&m=cropped",
  },
  {
    id: 43,
    name: "Vaibhavi Mudgal",
    team: "content",
    title: "Co-Lead",
    instagram: "https://instagram.com/mudgalvaibhavi?igshid=NGVhN2U2NjQ0Yg==",
    linkedin:
      "https://www.linkedin.com/in/vaibhavimudgal15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgPyZIo3uVSavkJDOTtPYCWLBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_ptJxDR6E130lyaawdIXgMV0hwPugs_MP2dYecNEh3fvkKHLwffYN5V8lYJcucOw67m9pfTzXqRRKmtc13tindisA1EFRHsxcz04iEh_V2A4DWSHExrUqSV0D9fFFSYzf0-",
  },
  {
    id: 44,
    name: "Mehar Parnami",
    team: "content",
    title: "Core Member",
    instagram: "https://www.instagram.com/Mehar_631/",
    linkedin: "https://www.linkedin.com/feed/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgM4jSEvPKb82Bi2vepy4XE9BQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_riQZSvYpoCHnaX8VZmq.FwapMC2gzWxJawo5IrL32l1tmaDxXNU9xPJIKanT3gNH_m9pfTzXqRRKmtc13tindi3b28OgieFtUdXmVnL.Ai3EHefOU5iUCJO4bjybK5284-",
  },
  {
    id: 45,
    name: "R Simran Nair",
    team: "content",
    title: "Core Member",
    instagram: "https://www.instagram.com/smriti.__./",
    linkedin: "https://www.linkedin.com/in/simran-nair-b8b85a257/",
    imgSrc:
      "https://ice-eu-53809.icedrive.io/download?p=nwqSVjaxB52Ae3f_TBZBVrj6HGOylDhUEI3SDKxpWgOXBwsNWPiKWMP5jhl0kEuOBQFCvigKNwSA_6B2fSKNQiBwpKyfnBgzu9hwwhDuq_qRIpOEqNaviEBWCIo.VnC.kOwOseOdiKK3osOlOG26FLE3CACwW_IU3IDYfihCPF3m9pfTzXqRRKmtc13tindikBTJTKICcJhyDd9NtL8GZJUkz1mvpNrCwoaK4QnzDhs-",
  },
];

export default teamMembers;
