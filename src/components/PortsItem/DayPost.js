import React from 'react'
import Button from '@restart/ui/esm/Button';
import styled from 'styled-components';
//add 

function DayPost() {
    return (
        <div>
            <Button>
                Đã đăng: 00 / 00 / 0000
            </Button>
            <Button>
                Đã chỉnh sửa: 00 / 00 / 0000
            </Button>
            <Button>
                Lượt xem: 999999
            </Button>
        </div>
    )
}

export default DayPost

export const PostsTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
`

export const PostsContent = styled.div`
    font-size: 20px;
`
