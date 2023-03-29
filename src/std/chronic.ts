import S from 'fluent-json-schema'

const schema = S.object()
  .id('https://r7.moph.go.th/platform/dataset/std/chronic')
  .description('JSON Schema สำหรับตรวจสอบแฟ้ม CHRONIC')
  .prop('HOSPCODE', S.string().minLength(5).maxLength(10).required())
  .prop('HN', S.string().maxLength(50).required())
  .prop('DATE_DIAG', S.string().maxLength(8).required())
  .prop('CHRONIC', S.string().maxLength(8).minLength(3).required())
  .prop('HOSP_DX', S.string().maxLength(10))
  .prop('HOSP_RX', S.string().maxLength(10))
  .prop('D_UPDATE', S.string().maxLength(14).minLength(14).required())

export default schema