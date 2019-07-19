import request from '@/tools/request';

export async function getUserInfo() {
  return await request('/getUserInfo');
}
